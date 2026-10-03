<?php
/**
 * Render.php হলো Gutenberg Dynamic Block (Server-Side Rendering) ফাইল। ওয়েবসাইটের Frontend (মূল পাতায়) কোনো ব্লক কিভাবে প্রদর্শন বা রেন্ডার হবে, তা এই ফাইলের মাধ্যমে চালনা করা হয়।
 */

if (!defined('ABSPATH')) {
	exit;
}
$id = wp_unique_id( 'xpo-block-test-purpose-' );
?>
<div <?php echo get_block_wrapper_attributes(); ?>
     id='<?php echo esc_attr( $id ); ?>'
     data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>
</div>

1️⃣ **কাজ কি করছে?**
--$id = wp_unique_id( 'xpo-block-test-purpose-' );--

প্রতিটি block render করার সময় unique ID generate করে।

Prefix 'xpo-block-test-purpose-' দিয়ে শুরু হয় → final যেমন হবে: xpo-block-test-purpose-1

সুবিধা: JS/CSS targeting সহজ হয়, multiple block থাকলেও conflict হয় না।


--- get_block_wrapper_attributes()--

Gutenberg block-এর default wrapper attributes ফেরত দেয়।

যেমন:

class → block class, alignment class (wp-block-my-plugin-style)

style → block inline style

data-* attributes, editor context অনুযায়ী

সুবিধা: Gutenberg conventions maintain হয়, block editor এবং frontend একরকম render হয়।


--data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'---

Block-এর all attributes JSON encode করে data attribute হিসেবে save করা হচ্ছে।

JS দ্বারা later access সহজ:

const blockData = JSON.parse(document.getElementById(id).dataset.attributes);


সুবিধা: dynamic rendering, frontend JS interactivity সহজ।



2️⃣ **Use করলে কি সুবিধা?**

Multiple blocks safe & unique ID → JS/CSS targeting conflict হবে না।

Gutenberg standard maintain → alignment, class, editor styling ঠিক থাকে।

Block attributes JS-এ সহজে access possible → dynamic frontend behavior।

Cleaner, standardized, future-proof rendering।

3️⃣**Use না করলে কি সমস্যা হতে পারে**
| Feature                           | না করলে সমস্যা                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| Unique ID                         | Multiple block হলে JS/CSS targeting conflict হতে পারে                              |
| get\_block\_wrapper\_attributes() | Block editor styling, alignment, class lose হবে; editor/frontend mismatch হতে পারে |
| data-attributes                   | JS থেকে block attributes access কঠিন, dynamic rendering জটিল                       |


💡 **মোট কথা:**
render.php হলো dynamic rendering point।

এটি frontend এ block কিভাবে দেখাবে তা define করে।

Use করলে safe, dynamic, editor-friendly rendering পাওয়া যায়।

Use না করলে JS targeting, CSS conflict, editor/frontend mismatch হতে পারে।

**render.php ব্যবহার করলে (recommended)**

<?php
$id = wp_unique_id( 'myBlock-' );
?>
<div <?php echo get_block_wrapper_attributes(); ?>
     id='<?php echo esc_attr( $id ); ?>'
     data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>
    <?php echo esc_html($attributes['title'] ?? 'Default Title'); ?>
</div>

 **Frontend Output (2 blocks):**

 <div class="wp-block-my-plugin" id="myBlock-1" data-attributes='{"title":"Block 1"}'>
  Block 1
</div>

<div class="wp-block-my-plugin" id="myBlock-2" data-attributes='{"title":"Block 2"}'>
  Block 2
</div>

**render.php না ব্যবহার করলে (static HTML)**

<div class="wp-block-my-plugin">
    Default Title
</div>

<div class="wp-block-my-plugin">
    Default Title
</div>


**Frontend Output (2 blocks):**
<div class="wp-block-my-plugin">
  Default Title
</div>

<div class="wp-block-my-plugin">
  Default Title
</div>

**❌ Problems:**

Same class & no unique ID → JS/CSS targeting conflict

Block attributes dynamic fetch করা যাবে না

Multiple blocks দেখলে editor/frontend mismatch হতে পারে
