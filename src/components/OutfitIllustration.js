// components/OutfitIllustration.js
import { ShirtAndJeans } from './Outfits/ShirtAndJeans';
import { ShirtAndShorts } from './Outfits/ShirtAndShorts';
import { TshirtAndShorts } from './Outfits/TshirtAndShorts';
import { TopAndSkirt } from './Outfits/TopAndSkirt';
import { TopAndShorts } from './Outfits/TopAndShorts';
import { BraAndPants } from './Outfits/BraAndPants';

export default function OutfitIllustration({ topColor, bottomColor, gender, outfit }) {
  const getOutfitComponent = () => {
    if (gender === 'male') {
      switch (outfit) {
        case 'Shirt & Jeans':
          return <ShirtAndJeans topColor={topColor} bottomColor={bottomColor} />;
        case 'Shirt & Shorts':
          return <ShirtAndShorts topColor={topColor} bottomColor={bottomColor} />;
        case 'T-Shirt & Shorts':
          return <TshirtAndShorts topColor={topColor} bottomColor={bottomColor} />;
        default:
          return <ShirtAndJeans topColor={topColor} bottomColor={bottomColor} />;
      }
    } else {
      switch (outfit) {
        case 'Top & Skirt':
          return <TopAndSkirt topColor={topColor} bottomColor={bottomColor} />;
        case 'Top & Shorts':
          return <TopAndShorts topColor={topColor} bottomColor={bottomColor} />;
        case 'Bra & Pants':
          return <BraAndPants topColor={topColor} bottomColor={bottomColor} />;
        default:
          return <TopAndSkirt topColor={topColor} bottomColor={bottomColor} />;
      }
    }
  };

  return getOutfitComponent();
}
