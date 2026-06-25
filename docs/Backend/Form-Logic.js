const zoneSelect = document.getElementById('building-zone');
const floorSelect = document.getElementById('floor');

const zoneData = {
    east: { label: "Floor", count: 21, prefix: "" },
    west: { label: "Floor", count: 29, prefix: "" },
    south: { label: "Floor", count: 19, prefix: "" },
    retail: { label: "Level", count: 6, prefix: "" },
    transport: { label: "Level", count: 3, prefix: "" },
    basement: { label: "Basement", count: 4, prefix: "B" }
};

zoneSelect.addEventListener('change', function() {
    const selectedZone = this.value;
    
    floorSelect.innerHTML = '<option value="">Select Floor/Level</option>';
    
    if (selectedZone && zoneData[selectedZone]) {
        const data = zoneData[selectedZone];
        floorSelect.disabled = false;
        
        for (let i = 1; i <= data.count; i++) {
            const option = document.createElement('option');
            const displayValue = `${data.label} ${data.prefix}${i}`;
            option.value = displayValue;
            option.textContent = displayValue;
            floorSelect.appendChild(option);
        }
    } else {
        floorSelect.disabled = true;
        floorSelect.innerHTML = '<option value="">Select Zone First</option>';
    }
});