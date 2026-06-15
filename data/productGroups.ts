import type { ProductGroup } from '@/types'

export const nusaterasoGroups: ProductGroup[] = [
  {
    id: 'vanilla',
    name: 'Vanilla Bean',
    image: '/images/nusateraso/gourmetvanilabean.png',
    desc: 'Planifolia vanilla beans from selected Indonesian farming regions, sun-cured for optimal aroma.',
    subs: [
      {
        id: 'vanilla-grade-a',
        name: 'Grade A — Gourmet',
        desc: 'Premium appearance, rich aroma profile, ideal for culinary and pastry applications. Moisture 25–35%.',
        image: '/images/nusateraso/Grade_A_Gourmet(Vanilla Bean).png',
      },
      {
        id: 'vanilla-grade-b',
        name: 'Grade B',
        desc: 'Slightly thinner pods with strong vanillin content. Suitable for extraction and commercial flavoring.',
        image: '/images/nusateraso/Grade_B_(Vanilla Bean).png',
      },
      {
        id: 'vanilla-grade-c',
        name: 'Grade C',
        desc: 'Split or shorter beans with high fragrance. Best used for powder, extract, or industrial processing.',
        image: '/images/nusateraso/Grade_C_(Vanilla Bean).png',
      },
      {
        id: 'vanilla-paste',
        name: 'Vanilla Paste',
        desc: 'Concentrated paste combining vanilla extract and ground seeds. Ready-to-use for baking and desserts.',
        image: '/images/nusateraso/Vanilla_Paste.png',
      },
      {
        id: 'vanilla-extract',
        name: 'Vanilla Extract',
        desc: 'Available in alcohol-based and non-alcohol variants. Consistent flavor intensity for food manufacturing.',
        image: '/images/nusateraso/Vanilla_Extract.png',
      },
      {
        id: 'vanilla-essence',
        name: 'Vanilla Essence',
        desc: 'Light, cost-effective vanilla flavoring for large-scale food and beverage production.',
        image: '/images/nusateraso/Vanilla_Essence.jpeg',
      },
      {
        id: 'vanilla-caviar',
        name: 'Vanilla Caviar',
        desc: 'Pure vanilla seeds extracted from the pod. Premium topping for confectionery and fine dining.',
        image: '/images/nusateraso/Vanilla_Caviar.png',
      },
      {
        id: 'vanilla-powder',
        name: 'Vanilla Powder',
        desc: 'Dried and ground vanilla beans. Ideal for dry mixes, seasonings, and alcohol-free applications.',
        image: '/images/nusateraso/Vanilla_Powder.png',
      },
      {
        id: 'vanilla-crystallized',
        name: 'Vanilla Crystallized',
        desc: 'Sugar-coated vanilla with a distinctive texture and slow-release aroma. Used in specialty confections.',
        image: '/images/nusateraso/Vanilla_Crystallized.png',
      },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee',
    image: '/images/nusateraso/arabica.png',
    desc: 'Single-origin Indonesian coffee from selected growing regions across the archipelago.',
    subs: [
      {
        id: 'coffee-arabica',
        name: 'Arabica',
        desc: 'Balanced acidity and complex aroma from volcanic soil regions. Smooth body with a refined flavor profile.',
        image: '/images/nusateraso/arabica.png',
      },
      {
        id: 'coffee-robusta',
        name: 'Robusta',
        desc: 'Strong body and bold taste with higher caffeine content. Consistent flavor for espresso blends or instant coffee.',
        image: '/images/nusateraso/robusta.png',
      },
    ],
  },
  {
    id: 'palm-sugar',
    name: 'Palm Sugar',
    image: '/images/nusateraso/coconutsugar.png',
    desc: 'Natural sweetener derived from coconut sap, processed hygienically to preserve purity.',
    subs: [
      {
        id: 'sugar-block',
        name: 'Block Palm Sugar',
        desc: 'Traditional block form with natural flavor. Suitable for cooking, specialty food, and export.',
        image: '/images/nusateraso/Block_Palm_Sugar.png',
      },
      {
        id: 'sugar-granulated',
        name: 'Granulated Palm Sugar',
        desc: 'Consistent granule texture, easy to measure and mix. Suitable for food industry applications.',
        image: '/images/nusateraso/Granulated_Palm_Sugar.png',
      },
    ],
  },
  {
    id: 'spices',
    name: 'Essential Spices',
    image: '/images/nusateraso/caviar.jpeg',
    desc: 'Selected Indonesian spices sourced from trusted producers. Available by request.',
    subs: [
      {
        id: 'spice-cloves',
        name: 'Cloves',
        desc: 'Hand-sorted, export-grade cloves from Indonesian producing regions.',
        note: 'By request',
        image: '/images/nusateraso/Cloves.png',
      },
      {
        id: 'spice-nutmeg',
        name: 'Nutmeg',
        desc: 'Whole or broken nutmeg, graded and sorted to export specification.',
        note: 'By request',
        image: '/images/nusateraso/Nutmeg.png',
      },
      {
        id: 'spice-cinnamon',
        name: 'Cinnamon',
        desc: 'Indonesian cinnamon (Cassia), available in sticks or broken form.',
        note: 'By request',
        image: '/images/nusateraso/Cinnamon.png',
      },
      {
        id: 'spice-others',
        name: 'Other Spices',
        desc: 'Additional spice varieties available upon inquiry. Confirm target species, quantity, and destination.',
        note: 'By request',
        image: '/images/nusateraso/Other_Spices.png',
      },
    ],
  },
]
