

const volumnIcon = {
    volumneVal3: 70,
    volumneVal2: 35,
    volumneVal1: 20,
    volumneVal0: -3
  };
  
  const formatVolumeIconPath = require('../assets/scripts/main');
  
  describe('the volumn icon level', () => {
    test('is 1', () => {
      expect(formatVolumeIconPath(volumnIcon.volumneVal1)).toContain('volume-level-1.svg');
    });
  
    test('is 2', () => {
        expect(formatVolumeIconPath(volumnIcon.volumneVal2)).toContain('volume-level-2.svg');
    });

    test('is 3', () => {
        expect(formatVolumeIconPath(volumnIcon.volumneVal3)).toContain('volume-level-3.svg');
      });

    test('is 0', () => {
        expect(formatVolumeIconPath(volumnIcon.volumneVal0)).toContain('volume-level-0.svg');
    });
  });