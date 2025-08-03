

const EmailCellRenderer = ({ value }: { value: string }) => (
    <a href={`mailto:${value}`} style={{ color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }}>
        {value}
    </a>
);

export default EmailCellRenderer;
