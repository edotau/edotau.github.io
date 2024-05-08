
-- Create a new table with the new schema
CREATE TABLE golf_clubs (
    id SERIAL PRIMARY KEY,
    club VARCHAR(50),
    model VARCHAR(100),
    loft VARCHAR(10),
    shaft VARCHAR(100),
    length VARCHAR(10),
    weight VARCHAR(10),
    torque VARCHAR(10),
    tip VARCHAR(10),
    flex VARCHAR(10)
);


INSERT INTO golf_clubs (club, model, loft, shaft, length, weight, torque, tip, flex)
VALUES
    ('Driver', 'Callaway Paradym', '10.5°', 'Fujikura Ventus TR Red Velocore 5R', '44.5', '59.5g', '3.5', '0.335', 'R/5.5'),
    ('3 Wood', 'Ping G430 SFT', '16°', 'Fujikura Ventus Red Velocore 6R', '42.25', '64.5', '3.4', '0.335', 'R/5.5'),
    ('5 Wood', 'Ping G430 SFT', '18°', 'Fujikura Ventus Red Velocore 6R', '42', '64.5', '3.4', '0.335', 'R/5.5'),
    ('4 Hybrid', 'Callaway Super Paradym', '21°', 'Ust Mamiya Recoil Dart HYB', '39.25"', '65g', '2.8', '0.37', 'R/5.5'),
    ('5 Iron', 'Mizuno JPX 921 Hot Metal', '22°', 'True Temper Elevate 95 VSS', '38"', '98g', '2.2', '0.355', 'S/6.0'),
    ('6 Iron', 'Mizuno JPX 921 Hot Metal', '25°', 'True Temper Elevate 95 VSS', '37.5"', '98g', '2.2', '0.355', 'S/6.0'),
    ('7 Iron', 'Mizuno JPX 921 Hot Metal', '29°', 'True Temper Elevate 95 VSS', '37"', '98g', '2.2', '0.355', 'S/6.0'),
    ('8 Iron', 'Mizuno JPX 921 Hot Metal', '34°', 'True Temper Elevate 95 VSS', '36.5"', '98g', '2.2', '0.355', 'S/6.0'),
    ('9 Iron', 'Mizuno JPX 921 Hot Metal', '39°', 'True Temper Elevate 95 VSS', '36"', '98g', '2.2', '0.355', 'S/6.0'),
    ('Pitching Wedge', 'Mizuno JPX 921 Hot Metal', '44°', 'True Temper Elevate 95 VSS', '35.5"', '98g', '2.2', '0.355', 'S/6.0'),
    ('Gap Wedge', 'Mizuno JPX 921 Hot Metal', '49°', 'True Temper Elevate 95 VSS', '35.25"', '98g', '2.2', '0.355', 'S/6.0'),
    ('Sand Wedge', 'Titleist Vokey SM9 Jet Black', '56°', 'KBS Tour Lite R', '35.25"', '128g', '1.8°', '0.355', 'S/5.5'),
    ('Lob Wedge', 'Titleist Vokey SM9 Jet Black', '60°', 'KBS Tour Lite R', '35"', '128g', '1.8°', '0.355', 'S/5.5'),
    ('Putter', 'Odyssey Tri-Hot 5k DBL Wide CH', '3°', 'Stroke Lab 3GEN Red 70', '34"', '70g', '-', '-', '-');
