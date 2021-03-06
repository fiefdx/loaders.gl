# Writer Object Format

To be compatible with `@loaders.gl/core` functions, writer objects need to conform to the following specification:

### Common Fields

| Field       | Type     | Default  | Description                                                     |
| ----------- | -------- | -------- | --------------------------------------------------------------- |
| `name`      | `String` | Required | Short name of the loader ('OBJ', 'PLY' etc)                     |
| `extension` | `String` | Required | Three letter (typically) extension used by files of this format |
| `category`  | `String` | Optional | Indicates the type/shape of data                                |

### Encoder Function

| Field                           | Type       | Default | Description            |
| ------------------------------- | ---------- | ------- | ---------------------- |
| `encodeSync`                    | `Function` | `null`  | Encodes synchronously  |
| `encode`                        | `Function` | `null`  | Encodes asynchronously |
| `encodeToStream` (Experimental) | `Function` | `null`  | Encodes to a stream    |

Note: The format of the input data to the encoders depends on the loader. Several loader categories are defined to provided standardized data formats for similar loaders.
