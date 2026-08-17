✅ Plugin Naming Convention (based on carousel folder)
জিনিস	মান              (নাম)	                     ব্যাখ্যা
🔖 Plugin Folder	     carousel/  	              তোমার দেয়া নাম
🧾 Main PHP File	     carousel.php	              সাধারণত ফোল্ডার নামের সাথে মিল রেখে main PHP ফাইল রাখা হয়
🔤 Text Domain	       carousel	                  ফোল্ডার নামের সাথে মিলিয়ে রাখা বেস্ট
📦 block.json এর name	 "carousel/react-carousel"	namespace/block-name — এখানে namespace = carousel
                                                   namespace‑এ uppercase (capital letter) দেওয়া যাবে না only lowercase ami jekno lowercase namespace dite parbo same  block-name tao

2️⃣ কোনগুলো মিল থাকলে সব ঠিক থাকে

##Folder name = namespace = text-domain

যেমন: carousel folder + namespace carousel + text-domain carousel

এতে debugging, translation, enqueueing সব clean হয়।

##Main PHP file name ≈ folder name

যেমন: carousel/carousel.php

optional, কিন্তু convention‑এর জন্য ভালো।

##Script handle name = logical block/plugin name

যেমন: carousel-frontend enqueueing build/frontend.js




main.php aer  Plugin Name, Description ta dekabe plugin aer page
block.json aer Title, Description ta dekabe kono page giye genaral,style aer upore

1️**PREFIX_VERSION:**

--Use করলে সুবিধা:--

Browser cache automatically fresh হয়।

Development সময় যেকোনো JS/CSS পরিবর্তন সঙ্গে সঙ্গে browser দেখবে।

Script/style enqueue করার সময় version control থাকে।

--Use না করলে অসুবিধা:--

Browser আগের cached JS/CSS load করতে পারে → পরিবর্তন দেখাবে না।

Update দিলেও users old version দেখবে।

**PREFIX_DIR_URL**

--Use করলে সুবিধা:--

Plugin URL সহজে access করা যায়।

JS, CSS, images, fonts ইত্যাদি include করতে simple।

যদি plugin folder move হয়, শুধু এই constant change করলেই সব ঠিক থাকে।

--Use না করলে অসুবিধা:--

প্রতিবার full URL manually লিখতে হবে।

যদি plugin move হয় বা site URL change হয় → সব path manually update করতে হবে।

**PREFIX_DIR_PATH**

--Use করলে সুবিধা:--

PHP ফাইল include/require করতে সহজ।

Plugin folder structure change হলেও শুধু constant update করলেই সব ঠিক থাকে।

--Use না করলে অসুবিধা:--

প্রতিবার relative path manually লিখতে হবে → ভুল হওয়ার সম্ভাবনা বেশি।

বড় project এ messy হয়ে যায়।
