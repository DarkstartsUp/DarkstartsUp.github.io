---
layout: page
title: Portfolio
permalink: /portfolio/
description: Selected interactive systems across AI, XR, and human experience.
nav: true
nav_order: 1
---

<div class="portfolio">
  <div class="portfolio-intro">
    <span class="portfolio-eyebrow">From research to interaction</span>
    <p>New ways to shape spaces, connect with others, and interact securely. Explore the systems in action below.</p>
  </div>

  <div class="portfolio-projects">
    {% for project in site.data.portfolio %}
      {% include portfolio_project.liquid project=project number=forloop.index %}
    {% endfor %}
  </div>
</div>

<script defer src="{{ '/assets/js/portfolio.js' | relative_url }}"></script>
