---
title: Fluid complex grid
template: test.html
type: partial
order: 3
show-snippet: true
---
[snippet]
<div class="wrapper">
    <!-- Complex grid -->
    <div class="col-wrap">
        <div class="col col--fluid-8">
            <p style="background-color: grey">8 columns</p>
        </div>
        <div class="col col--fluid-7">
            <p style="background-color: grey">7 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-9">
            <p style="background-color: grey">9 columns</p>
        </div>
        <div class="col col--fluid-6">
            <p style="background-color: grey">6 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-10">
            <p style="background-color: grey">10 columns</p>
        </div>
        <div class="col col--fluid-5">
            <p style="background-color: grey">5 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-11">
            <p style="background-color: grey">11 columns</p>
        </div>
        <div class="col col--fluid-4">
            <p style="background-color: grey">4 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-12">
            <p style="background-color: grey">12 columns</p>
        </div>
        <div class="col col--fluid-3">
            <p style="background-color: grey">3 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-13">
            <p style="background-color: grey">13 columns</p>
        </div>
        <div class="col col--fluid-2">
            <p style="background-color: grey">2 columns</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-14">
            <p style="background-color: grey">14 columns</p>
        </div>
        <div class="col col--fluid-1">
            <p style="background-color: grey">1 col</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-7">
            <p style="background-color: grey">7 columns</p>
        </div>
        <div class="col col--fluid-1">
            <p style="background-color: grey">1 col</p>
        </div>
        <div class="col col--fluid-7">
            <p style="background-color: grey">7 columns</p>
        </div>
    </div>
</div>
[/snippet]

To make detailed layouts you can use the full 15 columns individually (or 12 columns on tablet). A column is 45px wide and should use a column wrap to group the columns into a row.