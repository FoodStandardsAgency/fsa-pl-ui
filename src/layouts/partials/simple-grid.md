---
title: Simple grid
template: test.html
type: partial
order: 2
show-snippet: true
---
[snippet]
<div class="wrapper">

     <!-- full column -->
    <div class="col-wrap">
        <div class="col col--lg-one" style="background-color: grey">
            <p>full column</p>
        </div>
    </div>

    <!-- third columns -->
    <div class="col-wrap">
        <div class="col col--lg-one-third" style="background-color: grey">
            <p>one third column</p>
        </div>
        <div class="col col--lg-one-third" style="background-color: grey">
            <p>one third column</p>
        </div>
        <div class="col col--lg-one-third" style="background-color: grey">
            <p>one third column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--lg-two-thirds" style="background-color: grey">
            <p>two thirds column</p>
        </div>
        <div class="col col--lg-one-third" style="background-color: grey">
            <p>one third column</p>
        </div>
    </div>

    <!-- fifth columns -->
    <div class="col-wrap">
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--lg-three-fifths" style="background-color: grey">
            <p>three fifths column</p>
        </div>
        <div class="col col--lg-two-fifths" style="background-color: grey">
            <p>two fifths column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--lg-four-fifths" style="background-color: grey">
            <p>four fifths column</p>
        </div>
        <div class="col col--lg-one-fifth" style="background-color: grey">
            <p>one fifth column</p>
        </div>
    </div>

</div>
[/snippet]

For simpler page structures, you can create elements at thirds or fifths. Each column has a left and right margin of 10px and should use a column wrap to group columns into a row.

A simple column cannot be nested within another column. Eg putting a half column inside another half column won't result in a quarter column.