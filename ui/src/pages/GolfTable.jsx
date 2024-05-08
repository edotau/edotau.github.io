import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import 'primereact/resources/themes/saga-blue/theme.css'; // Or another theme
import 'primereact/resources/primereact.min.css'; // Core styles

// import { Endpoints } from '../api'
import './GolfTable.css'

// Function to fetch the golf clubs data from the backend
// const fetchGolfClubs = async () => {
//   try {
//     const response = await fetch(Endpoints.datatable);
//     if (!response.ok) {
//       throw new Error('Error fetching data');
//     }
//     const data = await response.json();
//     setGolfClubs(data);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setLoading(false);
//   }

const GolfTable = () => {
  // Manually enter the golf club data as an array of objects
  const golfClubs = [
    { id: 1, club: 'Driver', model: 'Callaway Paradym', loft: '10.5°', shaft: 'Fujikura Ventus TR Red Velocore 5R', length: '44.5"', weight: '59.5g', torque: '3.5', tip: '0.335', flex: 'R/5.5' },
    { id: 2, club: '3 Wood', model: 'Ping G430 SFT', loft: '16°', shaft: 'Fujikura Ventus Red Velocore 6R', length: '42.25"', weight: '64.5g', torque: '3.4', tip: '0.335', flex: 'R/5.5' },
    { id: 3, club: '5 Wood', model: 'Ping G430 SFT', loft: '18°', shaft: 'Fujikura Ventus Red Velocore 6R', length: '42"', weight: '64.5g', torque: '3.4', tip: '0.335', flex: 'R/5.5' },
    { id: 4, club: '4 Hybrid', model: 'Callaway Super Paradym', loft: '21°', shaft: 'Ust Mamiya Recoil Dart HYB', length: '39.25"', weight: '65g', torque: '2.8', tip: '0.37', flex: 'R/5.5' },
    { id: 5, club: '5 Iron', model: 'Mizuno JPX 921 Hot Metal', loft: '22°', shaft: 'True Temper Elevate 95 VSS', length: '38"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 6, club: '6 Iron', model: 'Mizuno JPX 921 Hot Metal', loft: '25°', shaft: 'True Temper Elevate 95 VSS', length: '37.5"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 7, club: '7 Iron', model: 'Mizuno JPX 921 Hot Metal', loft: '29°', shaft: 'True Temper Elevate 95 VSS', length: '37"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 8, club: '8 Iron', model: 'Mizuno JPX 921 Hot Metal', loft: '34°', shaft: 'True Temper Elevate 95 VSS', length: '36.5"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 9, club: '9 Iron', model: 'Mizuno JPX 921 Hot Metal', loft: '39°', shaft: 'True Temper Elevate 95 VSS', length: '36"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 10, club: 'Pitching Wedge', model: 'Mizuno JPX 921 Hot Metal', loft: '44°', shaft: 'True Temper Elevate 95 VSS', length: '35.5"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 11, club: 'Gap Wedge', model: 'Mizuno JPX 921 Hot Metal', loft: '49°', shaft: 'True Temper Elevate 95 VSS', length: '35.25"', weight: '98g', torque: '2.2', tip: '0.355', flex: 'S/6.0' },
    { id: 12, club: 'Sand Wedge', model: 'Titleist Vokey SM9 Jet Black', loft: '56°', shaft: 'KBS Tour Lite 95', length: '35.25"', weight: '128g', torque: '1.8°', tip: '0.355', flex: 'R/5.5' },
    { id: 13, club: 'Lob Wedge', model: 'Titleist Vokey SM9 Jet Black', loft: '60°', shaft: 'KBS Tour Lite 95', length: '35"', weight: '128g', torque: '1.8°', tip: '0.355', flex: 'R/5.5' },
    { id: 14, club: 'Putter', model: 'Odyssey Tri-Hot 5k DBL Wide CH', loft: '3°', shaft: 'Stroke Lab 3GEN Red 70', length: '34"', weight: '70g', torque: '-', tip: '-', flex: '-' }
  ];

  // State to handle selected row
  const [selectedClub, setSelectedClub] = useState(null);

  // Render the golf clubs using PrimeReact's DataTable component
  return (
    <div className="card">
      <div className="golf-table">
        <DataTable
          value={golfClubs}
          selectionMode="single"
          selection={selectedClub}
          onSelectionChange={(e) => setSelectedClub(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
          scrollable
          scrollHeight="400px"
        >
          <Column field="club" header="Club" style={{ minWidth: '150px' }} />
          <Column field="model" header="Model" style={{ minWidth: '250px' }} />
          <Column field="shaft" header="Shaft" style={{ minWidth: '300px' }} />
          <Column field="loft" header="Loft" style={{ minWidth: '50px' }} />
          <Column field="length" header="Length" style={{ minWidth: '100px' }} />
          <Column field="weight" header="Weight" style={{ minWidth: '100px' }} />
          <Column field="torque" header="Torque" style={{ minWidth: '100px' }} />
          <Column field="tip" header="Tip" style={{ minWidth: '100px' }} />
          <Column field="flex" header="Flex" style={{ minWidth: '100px' }} />
        </DataTable>
      </div>
    </div>
  );
};

export default GolfTable;