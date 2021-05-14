
interface ComponentProps {
    space: number,
}
const VSpacerComponent: React.FC<ComponentProps> = ({ space }) => {
    return (
        <div style={{ marginTop: `${space*8}px` }} />
    )
}

export default VSpacerComponent
