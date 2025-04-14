export default function OrderMenu({ setOrder}: { setOrder: (newValue: string) => void}) {
    
    return (
        <div>
            <button onClick={() => setOrder("tacos")}>Tacos</button>
            <button onClick={() => setOrder("burritos")}>Burritos</button>
        </div>
    )
}