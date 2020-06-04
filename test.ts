import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { ThaiBaht } from './mod.ts';

Deno.test('should be a function', () => {
  // console.log(typeof ThaiBaht);
  // console.log('don');
  // const x = 1 + 2;
  assertEquals(typeof ThaiBaht, 'function');
});

Deno.test('should not convert very small amount', () => {
  assertEquals(ThaiBaht(0.0001), '');
  assertEquals(ThaiBaht(0.001), '');
  assertEquals(ThaiBaht(0.009), '');
});

Deno.test('should convert to Satang', () => {
  assertEquals(ThaiBaht(0.01), 'หนึ่งสตางค์');
  assertEquals(ThaiBaht(0.1), 'สิบสตางค์');
  assertEquals(ThaiBaht(0.11), 'สิบเอ็ดสตางค์');
  assertEquals(ThaiBaht(0.123), 'สิบสองสตางค์');
  assertEquals(ThaiBaht(0.2), 'ยี่สิบสตางค์');
  assertEquals(ThaiBaht(0.2), 'ยี่สิบสตางค์');
  assertEquals(ThaiBaht(0.21), 'ยี่สิบเอ็ดสตางค์');
  assertEquals(ThaiBaht(0.25), 'ยี่สิบห้าสตางค์');
  assertEquals(ThaiBaht(0.255), 'ยี่สิบห้าสตางค์');
  assertEquals(ThaiBaht(0.5), 'ห้าสิบสตางค์');
  assertEquals(ThaiBaht(0.75), 'เจ็ดสิบห้าสตางค์');
  assertEquals(ThaiBaht(0.99), 'เก้าสิบเก้าสตางค์');
  assertEquals(ThaiBaht(0.999), 'เก้าสิบเก้าสตางค์');
});

Deno.test('should convert to Baht', () => {
  assertEquals(ThaiBaht(1), 'หนึ่งบาทถ้วน');
  assertEquals(ThaiBaht(10), 'สิบบาทถ้วน');
  assertEquals(ThaiBaht(11), 'สิบเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(12), 'สิบสองบาทถ้วน');
  assertEquals(ThaiBaht(20), 'ยี่สิบบาทถ้วน');
  assertEquals(ThaiBaht(21), 'ยี่สิบเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(22), 'ยี่สิบสองบาทถ้วน');
  assertEquals(ThaiBaht(100), 'หนึ่งร้อยบาทถ้วน');
  assertEquals(ThaiBaht(101), 'หนึ่งร้อยเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(111), 'หนึ่งร้อยสิบเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(121), 'หนึ่งร้อยยี่สิบเอ็ดบาทถ้วน');
});

Deno.test('should convert big number to Baht', () => {
  assertEquals(ThaiBaht(1000000), 'หนึ่งล้านบาทถ้วน');
  assertEquals(ThaiBaht(1000001), 'หนึ่งล้านเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(11000001), 'สิบเอ็ดล้านเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(11000000), 'สิบเอ็ดล้านบาทถ้วน');
});

Deno.test('should convert multiple million round to Baht', () => {
  assertEquals(ThaiBaht(1000000000000000000), 'หนึ่งล้านล้านล้านบาทถ้วน');
  assertEquals(ThaiBaht(1000000000001), 'หนึ่งล้านล้านเอ็ดบาทถ้วน');
  assertEquals(ThaiBaht(1000000000000), 'หนึ่งล้านล้านบาทถ้วน');
  assertEquals(ThaiBaht(1001000000001), 'หนึ่งล้านหนึ่งพันล้านเอ็ดบาทถ้วน');
  assertEquals(
    ThaiBaht(1001000001001),
    'หนึ่งล้านหนึ่งพันล้านหนึ่งพันเอ็ดบาทถ้วน',
  );
  assertEquals(ThaiBaht(1001000000000), 'หนึ่งล้านหนึ่งพันล้านบาทถ้วน');
  assertEquals(ThaiBaht(1000000000), 'หนึ่งพันล้านบาทถ้วน');
  assertEquals(ThaiBaht(10000000), 'สิบล้านบาทถ้วน');
  assertEquals(ThaiBaht(100000000), 'หนึ่งร้อยล้านบาทถ้วน');
});

Deno.test('should convert complex number to Baht', () => {
  assertEquals(
    ThaiBaht(6321298),
    'หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน',
  );
  assertEquals(
    ThaiBaht(10034567),
    'สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
  );
  assertEquals(
    ThaiBaht(20034567),
    'ยี่สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
  );
  assertEquals(
    ThaiBaht(30034567.0),
    'สามสิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
  );
});

Deno.test('should convert number to Baht with Satang', () => {
  assertEquals(ThaiBaht(11.25), 'สิบเอ็ดบาทยี่สิบห้าสตางค์');
  assertEquals(ThaiBaht(100.5), 'หนึ่งร้อยบาทห้าสิบสตางค์');
  assertEquals(ThaiBaht(567.01), 'ห้าร้อยหกสิบเจ็ดบาทหนึ่งสตางค์');
  assertEquals(
    ThaiBaht(123456789.999),
    'หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้าบาทเก้าสิบเก้าสตางค์',
  );
});
