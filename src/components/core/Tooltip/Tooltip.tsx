
const Tooltip = (props: { value?: string }) => {
  // AG Grid passes the value as 'value' prop
  return (
    <div
      className="ag-custom-tooltip"
      style={{
        background: "#fff",
        color: "#222",
        borderRadius: 8,
        boxShadow: "0 2px 12px 0 rgba(60,72,100,0.12)",
        padding: "12px 18px",
        fontSize: "1rem",
        fontWeight: 500,
        whiteSpace: "pre-line",
        lineHeight: 1.5,
        zIndex: 9999,
        maxWidth: 320,
      }}
      // Use dangerouslySetInnerHTML to render HTML
      dangerouslySetInnerHTML={{ __html: props.value || "" }}
    />
  );
};

export default Tooltip;