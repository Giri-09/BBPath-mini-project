import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const CSS = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h1>
	CSS Basics and Examples
</h1>
<h2>
	Inline CSS
</h2>
{`<p style="color: red;">
	This paragraph has inline CSS.
</p>`}
<h2>
	Internal CSS
</h2>
<p>
	This paragraph has internal CSS (defined in the &lt;head&gt; section).
</p>
<h2>
	External CSS
</h2>
{`<p class="my-paragraph">
	This paragraph has external CSS (defined in a separate style.css file).
</p>`}
<h2>
	Selectors
</h2>
<p>
	Paragraph with no specific class.
</p>
{`<p class="important">
	Important paragraph with class "important".
</p>`}
<h2>
	Box Model
</h2>
{`<div class="box">
	This is a box with content.
</div>`}
<h2>
	CSS Flexbox
</h2>
{`<div class="flex-container">
	<div class="flex-item" style="background-color: yellow;">
		Flex Item 1
	</div>
	<div class="flex-item" style="background-color: lightblue;">
		Flex Item 2
	</div>
	<div class="flex-item" style="background-color: lightgreen;">
		Flex Item 3
	</div>
</div>`}
<h2>
	CSS Pseudo-classes
</h2>
{`<p>
	<a href="#">
		 Hover over this link
	</a>
	 to see the effect of a CSS pseudo-class.
</p>`}
<h2>
	CSS Transitions
</h2>
{`<div class="transition-box">
	&nbsp;
</div>`}
<h2>
	CSS Grid Layout
</h2>
{`<div class="grid-container">
	<div class="grid-item">
		Item 1
	</div>
	<div class="grid-item">
		Item 2
	</div>
	<div class="grid-item">
		Item 3
	</div>
	<div class="grid-item">
		Item 4
	</div>
	<div class="grid-item">
		Item 5
	</div>
	<div class="grid-item">
		Item 6
	</div>
</div>`}
<h2>
	CSS Media Queries
</h2>
{`<div class="grid-container">
	<div class="grid-item">
		Item 1
	</div>
	<div class="grid-item">
		Item 2
	</div>
	<div class="grid-item">
		Item 3
	</div>
</div>`}
<h2>
	CSS Flexbox Responsive Layout
</h2>
{`<div class="flex-container">
	<div class="flex-item">
		Item 1
	</div>
	<div class="flex-item">
		Item 2
	</div>
	<div class="flex-item">
		Item 3
	</div>
	<div class="flex-item">
		Item 4
	</div>
</div>`}


      </div>
  
      <Footer />
    </Fragment>
  );

  export default CSS