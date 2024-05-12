---
sidebar_position: 6
---

# Cheatsheet

## Functions

The following is a reference of all functions provided by the RIV API in `riv.h` header.

### Basic
```cpp
// Present current frame, returns true until quit is requested.
bool riv_present(void);
```

### Resources
```cpp
// Load color palette from a PNG file
uint32_t riv_load_palette(const char* filename, uint8_t start_col);
// Load an image from a PNG file
uint64_t riv_make_image(const char* filename, int64_t color_key);
// Destroy an image
void riv_destroy_image(uint64_t img_id);
// Create an sprite sheet from an image
uint64_t riv_make_spritesheet(uint64_t img_id, uint32_t w, uint32_t h);
// Destroy an sprite sheet
void riv_destroy_spritesheet(uint64_t sps_id);
```

### Drawing
```cpp
// Clear the screen
void riv_clear(uint32_t col);
// Draw a point
void riv_draw_point(int64_t x, int64_t y, uint32_t col);
// Draw a line determined by two points
void riv_draw_line(int64_t x0, int64_t y0, int64_t x1, int64_t y1, uint32_t col);
// Draw fill of a rectangle determined by its top left and size
void riv_draw_rect_fill(int64_t x0, int64_t y0, int64_t w, int64_t h, uint32_t col);
// Draw lines of a rectangle determined by its top left and size
void riv_draw_rect_line(int64_t x0, int64_t y0, int64_t w, int64_t h, uint32_t col);
// Draw fill of a quad determined by 4 points
void riv_draw_quad_fill(int64_t x0, int64_t y0, int64_t x1, int64_t y1, int64_t x2, int64_t y2, int64_t x3, int64_t y3, uint32_t col);
// Draw lines of a quad determined by 4 points
void riv_draw_quad_line(int64_t x0, int64_t y0, int64_t x1, int64_t y1, int64_t x2, int64_t y2, int64_t x3, int64_t y3, uint32_t col);
// Draw fill of a rotated rectangle determined by its center, size and angle
void riv_draw_box_fill(int64_t ox, int64_t oy, int64_t w, int64_t h, float rot, uint32_t col);
// Draw lines of a rotated rectangle determined by its center, size and angle
void riv_draw_box_line(int64_t ox, int64_t oy, int64_t w, int64_t h, float rot, uint32_t col);
// Draw fill of a circle determined by its center and size
void riv_draw_circle_fill(int64_t ox, int64_t oy, int64_t d, uint32_t col);
// Draw line of a circle determined by its center and size
void riv_draw_circle_line(int64_t ox, int64_t oy, int64_t d, uint32_t col);
// Draw fill of a ellipse determined by its center and size
void riv_draw_ellipse_fill(int64_t ox, int64_t oy, int64_t w, int64_t h, uint32_t col);
// Draw line of a ellipse determined by its center and size
void riv_draw_ellipse_line(int64_t ox, int64_t oy, int64_t w, int64_t h, uint32_t col);
// Draw fill of a triangle determined by 3 points
void riv_draw_triangle_fill(int64_t x0, int64_t y0, int64_t x1, int64_t y1, int64_t x2, int64_t y2, uint32_t col);
// Draw line of a triangle determined by 3 points
void riv_draw_triangle_line(int64_t x0, int64_t y0, int64_t x1, int64_t y1, int64_t x2, int64_t y2, uint32_t col);
// Draw fill of a rectangle copied from an image
void riv_draw_image_rect(uint64_t img_id, int64_t x0, int64_t y0, int64_t w, int64_t h, int64_t sx0, int64_t sy0, int64_t mw, int64_t mh);
// Draw fill of a rectangle copied from a sprite sheet
void riv_draw_sprite(uint32_t n, uint64_t sps_id, int64_t x0, int64_t y0, int64_t nw, int64_t nh, int64_t mw, int64_t mh);
// Draw text determined by its sprite sheet, anchor point, size and returns its size
riv_vec2i riv_draw_text(const char* text, uint64_t sps_id, riv_align anchor, int64_t x, int64_t y, int64_t size, int64_t col);
// Draw text determined by its sprite sheet, anchor point, size, scale, spacing and returns its size
riv_vec2i riv_draw_text_ex(const char* text, uint64_t sps_id, riv_align anchor, int64_t x, int64_t y, int64_t mw, int64_t mh, int64_t sx, int64_t sy, int64_t col);

```

### Audio
```cpp
// Create a new sound buffer
uint64_t riv_make_soundbuffer(riv_soundbuffer_desc* desc);
// Destroy a sound buffer
void riv_destroy_soundbuffer(uint64_t sndbuf_id);
// Play a sound buffer or update a sound
uint64_t riv_sound(riv_sound_desc* desc);
// Play a waveform sound
uint64_t riv_waveform(riv_waveform_desc* desc);
```

### Pseudo random number generator
```cpp
// Seed pseudo random number generator
void riv_srand(uint64_t a, uint64_t b);
// Return a random  uint64 in range [0, MAX_UINT64]
uint64_t riv_rand(void);
// Return a random  uint64 in range [0, high]
uint64_t riv_rand_uint(uint64_t high);
// Return a random   int64 in range [low, high]
int64_t riv_rand_int(int64_t low, int64_t high);
// Return a random float64 in range [0.0, 1.0)
double riv_rand_float(void);
```

### Utilities
```cpp
// Print to standard output, use for debugging only
uint64_t riv_printf(const char* format, ...);
// Format a string into a temporary buffer, the string remains valid until next frame
char *riv_tprintf(const char* format, ...);
// Format a string
uint64_t riv_snprintf(char* buf, uint64_t n, const char* format, ...);
// Get the RIV version at runtime
uint64_t riv_version(void);
// Get the current machine cycle, THIS IS NON REPRODUCIBLE, use for bench-marking only
uint64_t riv_rdcycle(void);
```

## RIV Context

The following is all fields available in the `riv` context.

```cpp
////////////////////////////////////////////////////////////////////////////////
// RIV context structure
//
// The RIV context is a 12MB structure mapped at the virtual memory address 0x10000000,
// it contains all the public and private state used by other RIV APIs.
// Some fields can be read/write directly as convenience.
// Every field that can be read or written directly are marked as:
// - [R] - Can be read at any moment
// - [W] - Can be write at any moment
// - [RW] - Can be read/write at any moment
// Other fields without RW marks are used internally and should not be read or written.
//
typedef struct riv_context {
  //////////////////////////////////////
  // MMIO driver (driver writes/device reads)
  riv_mmio_header mmio_driver_header;       // MMIO driver header
  uint64_t frame;                           // [R] Current frame number
  uint32_t outcard_len;                     // [RW] Output card length
  uint32_t statecard_len;                   // [RW] State card length
  uint32_t height;                          // [RW] Screen height
  uint32_t width;                           // [RW] Screen width
  uint32_t target_fps;                      // [RW] Screen target refresh rate
  riv_pixel_format pixel_format;            // [RW] Screen pixel format
  uint32_t palette[RIV_MAX_COLORS];         // [RW] Color palette
  bool tracked_keys[RIV_NUM_KEYCODE];       // [RW] Key codes being tracked
  riv_command commands[RIV_MAX_COMMANDS];   // Command queue to be executed by the device
  uint32_t command_len;                     // Command queue length
  uint8_t mmio_driver_padding[780];         // Reserved

  //////////////////////////////////////
  // MMIO device (device writes/driver reads)
  riv_mmio_header mmio_device_header;       // MMIO device header
  uint32_t incard_len;                      // [R] Input card length
  uint32_t initial_statecard_len;           // [R] Initial state card length
  uint32_t key_toggle_count;                // [R] Number of toggled keys in this frame
  uint8_t key_toggles[RIV_MAX_KEY_TOGGLES]; // [R] Toggled key in this frame (in order)
  uint8_t mmio_device_padding[4004];        // Reserved

  //////////////////////////////////////
  // Public state
  int64_t time_ms;                            // [R] Current time in milliseconds since first frame
  double time;                                // [R] Current time in seconds since first frame
  uint64_t quit_frame;                        // [RW] Stop main loop at the specified frame
  bool quit;                                  // [RW] Whether to stop main loop after this frame
  bool valid;                                 // [R] Whether we are initialized
  bool verifying;                             // [R] Whether we are verifying
  bool yielding;                              // [R] Whether every frame should yield audio/video
  uint32_t key_modifiers;                     // [R] Current keyboard modifiers (e.g CTRL/ALT/SHIFT)
  riv_key_state keys[RIV_NUM_KEYCODE];        // [R] Current keyboard state
  riv_draw_state draw;                        // [RW] Draw state
  riv_image images[RIV_MAX_IMAGES];           // [RW] Loaded images
  riv_spritesheet spritesheets[RIV_MAX_SPRITESHEETS]; // [RW] Loaded sprite sheets
  uint8_t pub_driver_padding[904360];         // Reserved

  //////////////////////////////////////
  // Internal state
  riv_xoshiro256 prng;                        // PRNG state
  uint64_t entropy[128];                      // Entropy accumulated from inputs
  uint32_t entropy_index;                     // Entropy index
  uint32_t entropy_size;                      // Entropy size
  uint64_t sound_gen;                         // Counter for generating sound ids
  uint64_t soundbuffer_gen;                   // Counter for generating sound buffer ids
  uint64_t image_gen;                         // Counter for generating image ids
  uint64_t sprite_gen;                        // Counter for generating sprite ids
  uint32_t txbuffer_off;                      // Current transfer buffer offset
  uint32_t verify_key_event_index;            // Current event index when verifying
  riv_key_toggle_event *verify_key_events;    // List of events to follow when verifying
  uint64_t stop_frame;                        // Device requested stop frame
  uint64_t temp_str_off;                      // Temporary string buffer offset
  uint8_t temp_str_buf[RIV_SIZE_TEMP_STRBUF]; // Temporary string buffer (used by riv_tprintf)
  uint8_t prv_driver_padding[981912];         // Reserved

  //////////////////////////////////////
  // Buffers
  uint8_t incard[RIV_SIZE_INCARD];                    // [R] Input card buffer
  uint8_t outcard[RIV_SIZE_OUTCARD];                  // [RW] Output card buffer
  uint8_t statecard[RIV_SIZE_STATECARD];              // [RW] State card buffer
  uint8_t framebuffer[RIV_SIZE_FRAMEBUFFER];          // [RW] Screen frame buffer
  uint8_t txbuffer[RIV_SIZE_TXBUFFER];                // Data buffer for device commands
} riv_context;
```
