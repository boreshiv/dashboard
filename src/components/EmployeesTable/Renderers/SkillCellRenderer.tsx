import { skillIconMap } from '../employeeTableMap';

const SkillCellRenderer = ({ value }: { value: string[] }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {
                value.map((s) => {
                    const Icon = skillIconMap[s];
                    return Icon ? (<div title={s}> <Icon key={s} size={16} /></div>) : <span key={s}>{s}</span>;
                })
            }
        </div>
    );
}

export default SkillCellRenderer;