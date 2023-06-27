// import turbine - grid view
import turbine1 from "./assets/img/turbines/turbine-01.png"
import turbine2 from './assets/img/turbines/turbine-02.png'
import turbine3 from './assets/img/turbines/turbine-03.png'
import turbine4 from './assets/img/turbines/turbine-04.png'
import turbine5 from './assets/img/turbines/turbine-05.png'
import turbine6 from './assets/img/turbines/turbine-06.png'
import turbine7 from './assets/img/turbines/turbine-07.png'
import turbine8 from './assets/img/turbines/turbine-08.png'
import turbine9 from './assets/img/turbines/turbine-09.png'

export const productData = [
  {
    id: 1,
    platform: "EnVentus™ Platform",
    name: "V172-7.2 MW™",
    description:
      "Designed with full value chain in mind, the V172-7.2 MW™ realises improved transportability of the nacelle unit, as well as the flexibility to service and upgrades over the turbine’s operational lifetime.",
    standardRatedPower: "7,200kW",
    convertedPower: "7.2 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "20°C* to +45°C",
    maximum: "106.9dB(A)**",
    rotorDiameter: "172m",
    sweptArea: "23,235m2",
    aerodynamicBrake: "full blade feathering with 3 pitch cylinders",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "6.2g",
    energyBreakEven: "7 months",
    lifetimeReturn: "34-35 times",
    recyclabilityRate: "87%",
    image: turbine1,
  },
  {
    id: 2,
    platform: "EnVentus™ Platform",
    name: "V162-7.2 MW™",
    description:
      "Improved siteability in warm climates is enabled through the optional larger CoolerTop. Designed with full value chain in mind, the V162-7.2 MW™ realises improved transportability of the nacelle unit, as well as the flexibility to service and upgrades over the turbine’s operational lifetime.",
    standardRatedPower: "6,800kW",
    convertedPower: "6.2 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "20°C* to +45°C",
    maximum: "105.5dB(A)**",
    rotorDiameter: "162m",
    sweptArea: "20,612m2",
    aerodynamicBrake: "full blade feathering with 3 pitch cylinders",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "5.8g",
    energyBreakEven: "6 months",
    lifetimeReturn: "41 times",
    recyclabilityRate: "86%",
    image: turbine2,
  },
  {
    id: 3,
    platform: "EnVentus™ Platform",
    name: "V162-6.2 MW™",
    description:
      "The V162-6.2 MW™ is designed for low to medium wind sites and has extensive application in high wind speeds.",
    standardRatedPower: "6,200kW",
    convertedPower: "6.2 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "20°C* to +45°C",
    maximum: "104.8dB(A)**",
    rotorDiameter: "162m",
    sweptArea: "20,612m2",
    aerodynamicBrake: "full blade feathering with 3 pitch cylinders",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "6.1g",
    energyBreakEven: "6 months",
    lifetimeReturn: "39 times",
    recyclabilityRate: "88%",
    image: turbine3,
  },
  {
    id: 3,
    platform: "EnVentus™ Platform",
    name: "V150-6.0 MW™",
    description:
      "The V150-6.0 MW™ lifts the larger rotor introduced with V150-4.2 MW™ into stronger wind speeds. Combined with its higher generator rating, it increases the production potential at turbine level by more than 20 percent compared to V150-4.2 MW™ in medium wind speed conditions.",
    standardRatedPower: "6,000kW",
    convertedPower: "6 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "20°C* to +45°C",
    maximum: "104.9dB(A)**",
    rotorDiameter: "150m",
    sweptArea: "17,672m2",
    aerodynamicBrake: "full blade feathering with 3 pitch cylinders",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "7.6g",
    energyBreakEven: "6 months",
    lifetimeReturn: "42 times",
    recyclabilityRate: "89%",
    image: turbine4,
  },
  {
    id: 4,
    platform: "Offshore Platform",
    name: "V236-15.0 MW™",
    description:
      "The V236-15.0 MW™ is built on proven, world-class technology and engineered for efficiency in offshore environments around the world. With the industry’s largest swept area and a capacity factor of over 60% from the 115.5m blades, V236-15.0 MW™ delivers leading park performance for our customers.",
    standardRatedPower: "15,000kW",
    convertedPower: "15 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "30m/s",
    windClass: "IEC S",
    standardOperatingTemp: "-10°C* to +45°C*",
    maximum: "118dB(A)",
    rotorDiameter: "236m",
    sweptArea: "43,742m2",
    aerodynamicBrake: "Three blades full feathering",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "11.6g",
    energyBreakEven: "4 months",
    lifetimeReturn: "62 times",
    recyclabilityRate: "76%",
    image: turbine5,
  },
  {
    id: 5,
    platform: "Offshore Platform",
    name: "V174-9.5 MW™",
    description:
      "The V174-9.5 MW™ protoplatform was successfully installed at Østerild National Test Centre in Denmark in January 2020. Our robust test program has enabled us to thoroughly monitor the reliability and performance output of the V174-9.5 MW™ before serial production commences.",
    standardRatedPower: "9,600kW",
    convertedPower: "9.6 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC IB",
    standardOperatingTemp: "-15°C* to +35°C*",
    maximum: "112.9dB(A)",
    rotorDiameter: "174m",
    sweptArea: "23,779m2",
    aerodynamicBrake: "Three blades full feathering",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "9.2g",
    energyBreakEven: "5 months",
    lifetimeReturn: "55 times",
    recyclabilityRate: "81%",
    image: turbine6,
  },
  {
    id: 6,
    platform: "Offshore Platform",
    name: "V164-10.0 MW™",
    description:
      "The V164-10.0 MW™ incorporates a stronger gearbox, some minor mechanical upgrades, and a small design change to enhance air flow and increase cooling in the converter. The upgrades ensure that this gentle giant can run at full power, at a site with wind speeds of 10 metres per second, for 25 years.",
    standardRatedPower: "10,000kW",
    convertedPower: "10 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "-15°C* to +35°C*",
    maximum: "112.9dB(A)",
    rotorDiameter: "164m",
    sweptArea: "21,124m2",
    aerodynamicBrake: "Three blades full feathering",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "9.2g",
    energyBreakEven: "4 months",
    lifetimeReturn: "59 times",
    recyclabilityRate: "69%",
    image: turbine7,
  },
  {
    id: 7,
    platform: "Offshore Platform",
    name: "V164-9.5 MW™",
    description:
      "The V164-9.5 MW™ continues the legacy of the proven V164-8.0MW®. With minimal design changes, such as a redesigned gearbox and cooling system upgrades, the 9.5 MW provides market-leading output levels, low operational costs, cost-efficient installation and built-in reliability.",
    standardRatedPower: "9,500kW",
    convertedPower: "9.5 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "25m/s",
    windClass: "IEC S",
    standardOperatingTemp: "-15°C* to +35°C*",
    maximum: "112.9dB(A)",
    rotorDiameter: "164m",
    sweptArea: "21,124m2",
    aerodynamicBrake: "Three blades full feathering",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "8.4g",
    energyBreakEven: "5 months",
    lifetimeReturn: "52 times",
    recyclabilityRate: "74%",
    image: turbine8,
  },
  {
    id: 8,
    platform: "4 MW Platform",
    name: "V163-4.5 MW™",
    description:
      "The V163-4.5 MW™, featuring a large rotor-size-to-rating ratio, helps you realise stable energy output and up to 10% more Annual Energy Production at park level under medium to low wind conditions. ",
    standardRatedPower: "4,500kW",
    convertedPower: "4.5 MW",
    cutInWindSpeed: "3m/s",
    cutOutWindSpeed: "24m/s",
    windClass: "IEC S",
    standardOperatingTemp: "-30°C* to +45°C",
    maximum: "109.0 dB(A)",
    rotorDiameter: "163m",
    sweptArea: "20,867m2",
    aerodynamicBrake: "Full blade feathering with 3 pitch cylinders",
    frequency: "50/60 Hz",
    converter: "full scale",
    carbonFootprint: "5.2g",
    energyBreakEven: "6 months",
    lifetimeReturn: "42 times",
    recyclabilityRate: "83%",
    image: turbine9,
  },
];