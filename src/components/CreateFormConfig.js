export default function CreateFormConfig(type) {
  if (type === "project") {
    return [
      { name: "project name", required: true },
      { name: "start date", required: true },
      { name: "target end date", required: true },
      { name: "actual end date", required: false },
    ];
  }
  if (type === "issue") {
    return [
      { name: "issue summary", required: true },
      {
        name: "issue description",
        multiline: true,
        required: true,
      },
      { name: "identified by", required: true },
      { name: "identified date", required: true },
      { name: "related project", select: true, required: true },
      { name: "assigned to", required: true },
      { name: "status", required: true },
      { name: "priority", required: true },
      {
        name: "target resolution date",
        required: true,
      },
      { name: "progress", required: true },
      {
        name: "actual resolution date",
        required: false,
      },
      {
        name: "resolution summary",
        required: false,
      },
    ];
  }
}
