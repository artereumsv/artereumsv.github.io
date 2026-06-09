import {
  App,
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  Modal,
  Popconfirm,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { artworksApi, type Artwork, type ArtworkPayload } from "../lib/artworksApi";

const { Content } = Layout;
const { Title, Text } = Typography;

type ArtworkFormValues = ArtworkPayload;

const defaultFormValues: ArtworkFormValues = {
  slug: "",
  title: "",
  description: "",
  authorName: "",
  usdPrice: 0,
  ethPrice: 0,
  editionType: "",
  editionTotal: 0,
  editionAvailable: 0,
  format: "",
  dimensions: "",
  fileSize: "",
  resolution: "",
  coverImageUrl: "",
  status: "Draft",
};

function toPayload(values: ArtworkFormValues): ArtworkPayload {
  return {
    slug: values.slug.trim(),
    title: values.title.trim(),
    description: values.description.trim(),
    authorName: values.authorName.trim(),
    usdPrice: Number(values.usdPrice),
    ethPrice: Number(values.ethPrice),
    editionType: values.editionType.trim(),
    editionTotal: Number(values.editionTotal),
    editionAvailable: Number(values.editionAvailable),
    format: values.format.trim(),
    dimensions: values.dimensions.trim(),
    fileSize: values.fileSize.trim(),
    resolution: values.resolution.trim(),
    coverImageUrl: values.coverImageUrl.trim(),
    status: values.status.trim(),
  };
}

export default function CatalogPage() {
  const { message } = App.useApp();
  const [form] = Form.useForm<ArtworkFormValues>();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);

  const loadArtworks = async () => {
    setLoading(true);
    try {
      const data = await artworksApi.getAll();
      setArtworks(data);
    } catch (error) {
      const description = error instanceof Error ? error.message : "No se pudo cargar el catálogo.";
      message.error(description);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadArtworks();
  }, []);

  const openCreateModal = () => {
    setEditingArtwork(null);
    form.setFieldsValue(defaultFormValues);
    setModalOpen(true);
  };

  const openEditModal = (artwork: Artwork) => {
    setEditingArtwork(artwork);
    form.setFieldsValue({
      slug: artwork.slug,
      title: artwork.title,
      description: artwork.description,
      authorName: artwork.authorName,
      usdPrice: artwork.usdPrice,
      ethPrice: artwork.ethPrice,
      editionType: artwork.editionType,
      editionTotal: artwork.editionTotal,
      editionAvailable: artwork.editionAvailable,
      format: artwork.format,
      dimensions: artwork.dimensions,
      fileSize: artwork.fileSize,
      resolution: artwork.resolution,
      coverImageUrl: artwork.coverImageUrl,
      status: artwork.status,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingArtwork(null);
    form.resetFields();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload = toPayload(values);

      setSaving(true);

      if (editingArtwork) {
        const updated = await artworksApi.update(editingArtwork.id, payload);
        setArtworks((current) => current.map((item) => (item.id === updated.id ? updated : item)));
        message.success("Artwork actualizado.");
      } else {
        const created = await artworksApi.create(payload);
        setArtworks((current) => [...current, created].sort((a, b) => a.id - b.id));
        message.success("Artwork creado.");
      }

      closeModal();
    } catch (error) {
      if (error instanceof Error && error.name === "Error") {
        message.error(error.message);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (artwork: Artwork) => {
    try {
      setLoading(true);
      await artworksApi.remove(artwork.id);
      setArtworks((current) => current.filter((item) => item.id !== artwork.id));
      message.success("Artwork eliminado.");
    } catch (error) {
      const description = error instanceof Error ? error.message : "No se pudo eliminar el artwork.";
      message.error(description);
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnsType<Artwork> = [
    { title: "ID", dataIndex: "id", width: 70 },
    {
      title: "Obra",
      key: "artwork",
      render: (_, record) => (
        <div>
          <Text strong style={{ color: "white" }}>
            {record.title}
          </Text>
          <div style={{ color: "#8c8c8c" }}>{record.slug}</div>
        </div>
      ),
    },
    { title: "Autor", dataIndex: "authorName", width: 180 },
    {
      title: "Precio",
      key: "price",
      width: 150,
      render: (_, record) => (
        <div>
          <div>${record.usdPrice}</div>
          <div style={{ color: "#8c8c8c" }}>ETH {record.ethPrice}</div>
        </div>
      ),
    },
    {
      title: "Edición",
      key: "edition",
      width: 170,
      render: (_, record) => (
        <div>
          <div>{record.editionType}</div>
          <div style={{ color: "#8c8c8c" }}>
            {record.editionAvailable}/{record.editionTotal}
          </div>
        </div>
      ),
    },
    {
      title: "Estado",
      dataIndex: "status",
      width: 120,
      render: (value: string) => <Tag color="blue">{value}</Tag>,
    },
    {
      title: "Acciones",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => openEditModal(record)}>
            Editar
          </Button>
          <Popconfirm
            title="Eliminar artwork"
            description={`Se eliminará "${record.title}".`}
            okText="Eliminar"
            cancelText="Cancelar"
            onConfirm={() => void handleDelete(record)}
          >
            <Button danger icon={<DeleteOutlined />}>
              Eliminar
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      <SiteHeader />

      <Content style={{ marginTop: 80, padding: 24 }}>
        <div
          style={{
            background: "#141414",
            borderRadius: 20,
            padding: 24,
            border: "1px solid #262626",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <Title level={3} style={{ margin: 0, color: "white" }}>
                Catálogo
              </Title>
              <Text style={{ color: "#8c8c8c" }}>Mantenimiento de artworks</Text>
            </div>

            <Space>
              <Button icon={<ReloadOutlined />} onClick={() => void loadArtworks()}>
                Recargar
              </Button>
              <Button type="primary" icon={<PlusOutlined />} onClick={openCreateModal}>
                Nuevo artwork
              </Button>
            </Space>
          </div>

          <Table
            rowKey="id"
            loading={loading}
            columns={columns}
            dataSource={artworks}
            scroll={{ x: 1200 }}
            pagination={{ pageSize: 8 }}
          />
        </div>
      </Content>

      <Modal
        open={modalOpen}
        title={editingArtwork ? "Editar artwork" : "Nuevo artwork"}
        onCancel={closeModal}
        onOk={() => void handleSubmit()}
        okText={editingArtwork ? "Guardar cambios" : "Crear artwork"}
        cancelText="Cancelar"
        confirmLoading={saving}
        width={860}
        destroyOnHidden
      >
        <Form form={form} layout="vertical" initialValues={defaultFormValues}>
          <div className="catalog-form-grid">
            <Form.Item label="Slug" name="slug" rules={[{ required: true, message: "Ingrese el slug." }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Título"
              name="title"
              rules={[{ required: true, message: "Ingrese el título." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Autor"
              name="authorName"
              rules={[{ required: true, message: "Ingrese el autor." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Estado"
              name="status"
              rules={[{ required: true, message: "Ingrese el estado." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Precio USD"
              name="usdPrice"
              rules={[{ required: true, message: "Ingrese el precio USD." }]}
            >
              <InputNumber min={0} precision={2} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Precio ETH"
              name="ethPrice"
              rules={[{ required: true, message: "Ingrese el precio ETH." }]}
            >
              <InputNumber min={0} precision={8} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Tipo de edición"
              name="editionType"
              rules={[{ required: true, message: "Ingrese el tipo de edición." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Edición total"
              name="editionTotal"
              rules={[{ required: true, message: "Ingrese el total." }]}
            >
              <InputNumber min={0} precision={0} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Edición disponible"
              name="editionAvailable"
              rules={[{ required: true, message: "Ingrese la disponibilidad." }]}
            >
              <InputNumber min={0} precision={0} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Formato"
              name="format"
              rules={[{ required: true, message: "Ingrese el formato." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Dimensiones"
              name="dimensions"
              rules={[{ required: true, message: "Ingrese las dimensiones." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Tamaño de archivo"
              name="fileSize"
              rules={[{ required: true, message: "Ingrese el tamaño." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Resolución"
              name="resolution"
              rules={[{ required: true, message: "Ingrese la resolución." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="URL de portada"
              name="coverImageUrl"
              rules={[{ required: true, message: "Ingrese la URL de portada." }]}
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item
            label="Descripción"
            name="description"
            rules={[{ required: true, message: "Ingrese la descripción." }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}
