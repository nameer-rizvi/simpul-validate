# simpul-validate

An opinionated, fail-fast validation middleware designed for **back-end safety, predictability, and performance**.

`simpul-validate` intentionally departs from conventional validation libraries. Rather than attempting to be flexible or UI-friendly, it prioritizes **strict server-side validation**, deterministic behavior, and clear guarantees at the API boundary.

---

## Installation

```console
npm i simpul-validate
```

### Node v16 Support

```console
npm i simpul-validate@0.2.2
```

---

## Usage

Provide a dictionary with definitions to create a validator and use validator where needed.

```javascript
const simpul_validate = require("simpul_validate");

const dictionary = [{ key: "name", type: "string", maxLength: 10 }];

const validator = simpul_validate(dictionary);

try {
  const payload = { name: "Ihave A Longname" };

  validator(payload);
} catch (error) {
  // handle error
}
```

---

## Philosophy & Design

### Opinionated by Design

`simpul-validate` embraces a deliberately opinionated approach to validation. It is optimized for back-end use cases where correctness, performance, and predictability matter more than aggregating multiple errors or loosely accepting input.

This approach goes against many common validation patterns — intentionally.

---

### Fail-Fast Validation

Instead of collecting and returning a list of validation errors, `simpul-validate` uses a **fail-fast model**:

- Validation stops at the **first failure**
- An error is **thrown immediately**
- Middleware or route handlers can catch and handle the error using their existing error-handling flow

This keeps validation logic simple, avoids branching control flow, and reduces unnecessary work on invalid requests or processing the entirety of large payloads.

---

### Payload Sanitization via Mutation

Sanitization is applied by **mutating the original payload**, rather than returning a new sanitized object.

This design choice:

- Avoids unnecessary object allocations
- Keeps middleware signatures simple
- Eliminates the need to reassign request bodies or payloads via res locals after validation
- Aligns naturally with Express / Fastify-style middleware

The result is a cleaner and more ergonomic server-side validation flow.

---

### Exhaustive Dictionary-Based Validation

The validation dictionary is intentionally designed to be **exhaustive**.

Every possible payload key and value is expected to have a corresponding definition in the dictionary. This ensures:

- Unknown or unexpected fields are not silently accepted
- Validation behavior is explicit and deterministic
- Back-end validation is safer, auditable, and predictable
- Accidental schema drift is caught early

By requiring full coverage, `simpul-validate` treats validation as a **schema enforcement tool**, not just a best-effort checker.

---

### Tradeoffs

This design deliberately trades:

- Multi-error reporting
- Partial or permissive schemas
- UI-centric validation ergonomics

…for:

- Stronger back-end guarantees
- Simpler control flow
- Better performance under load
- Clear, enforceable API contracts

---

simpul-validate is best suited for APIs, internal services, and systems where input correctness is non-negotiable and validation is treated as a first-class security and reliability concern.
