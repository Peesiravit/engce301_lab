# ADR-001: Centralized Authentication Service

## Status
Proposed/Approved

## Context
ในระบบ N-Tier/Microservices ปัจจุบัน เรามีความท้าทายในการจัดการข้อมูลผู้ใช้และการตรวจสอบสิทธิ์ หากให้แต่ละ Service จัดการเองจะทำให้เกิดความซ้ำซ้อนและช่องโหว่ทางความปลอดภัย

## Decision
เราตัดสินใจใช้ **Centralized Auth Service** ร่วมกับ **JWT (JSON Web Token)** ในการจัดการความปลอดภัยทั้งหมดของระบบ

## Rationale
1. **Single Source of Truth:** ข้อมูลผู้ใช้ถูกจัดการที่เดียว
2. **Stateless Scalability:** JWT ช่วยให้ API Server ไม่ต้องเก็บ Session ไว้ในหน่วยความจำ
3. **Ease of Integration:** บริการอื่นๆ ในอนาคตสามารถนำผลการตรวจสอบ JWT ไปใช้ได้ทันที

## Consequences
- **จุดเด่น:** ระบบมีความเป็นระเบียบและปลอดภัยตามมาตรฐานสากล
- **จุดด้อย:** หาก Auth Service ล่ม ทั้งระบบจะไม่สามารถ Login ได้ (Single Point of Failure) ซึ่งต้องแก้ด้วยการทำ High Availability
