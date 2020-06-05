# Thai Baht Text for Deno version 1.0.0

Convert number to Thai Baht as Text

แปลง เลข ให้เป็น หน่วยบาทไทย

___
## Usage
#### วิธีการใช้งาน
```typescript
import { ThaiBaht } from "https://deno.land/x/thai_baht_text/mod.ts";

const money = 9959;
const moneyText = ThaiBaht(money);

console.log(moneyText);
// OUTPUT: เก้าพันเก้าร้อยเก้าสิบห้าถ้วน
```

#### **CAUTION!**
คุณสามารถใส่เลขได้ไม่เกิน 9007199254740991
ซึ่งเป็น MAX_SAFE_INTEGER ของ javascript
___
## License
The Thai-Baht-Text-Deno is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).