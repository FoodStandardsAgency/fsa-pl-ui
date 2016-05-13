---
title: Fluid simple grid
template: test.html
type: partial
order: 2
show-snippet: true
---
[snippet]
<div class="wrapper">
    <!-- half columns -->
        <div class="col-wrap">
            <div class="col col--fluid-one-half">
                <p style="background-color: grey">one half column</p>
            </div>
            <div class="col col--fluid-one-half">
                <p style="background-color: grey">one half column</p>
            </div>
        </div>
    <!-- third columns -->
    <div class="col-wrap">
        <div class="col col--fluid-one-third">
            <p style="background-color: grey">one third column</p>
        </div>
        <div class="col col--fluid-one-third">
            <p style="background-color: grey">one third column</p>
        </div>
        <div class="col col--fluid-one-third">
            <p style="background-color: grey">one third column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-two-thirds">
            <p style="background-color: grey">two thirds column</p>
        </div>
        <div class="col col--fluid-one-third">
            <p style="background-color: grey">one third column</p>
        </div>
    </div>
    <!-- fourth columns -->
    <div class="col-wrap">
        <div class="col col--fluid-one-quarter">
            <p style="background-color: grey">one quarter column</p>
        </div>
        <div class="col col--fluid-one-quarter">
            <p style="background-color: grey">one quarter column</p>
        </div>
        <div class="col col--fluid-one-quarter">
            <p style="background-color: grey">one quarter column</p>
        </div>
        <div class="col col--fluid-one-quarter">
            <p style="background-color: grey">one quarter column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-three-quarters">
            <p style="background-color: grey">three quarters column</p>
        </div>
        <div class="col col--fluid-one-quarter">
            <p style="background-color: grey">one quarter column</p>
        </div>
    </div>
    <!-- fifth columns -->
    <div class="col-wrap">
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-three-fifths">
            <p style="background-color: grey">three fifths column</p>
        </div>
        <div class="col col--fluid-two-fifths">
            <p style="background-color: grey">two fifths column</p>
        </div>
    </div>
    <div class="col-wrap">
        <div class="col col--fluid-four-fifths">
            <p style="background-color: grey">four fifths column</p>
        </div>
        <div class="col col--fluid-one-fifth">
            <p style="background-color: grey">one fifth column</p>
        </div>
    </div>
</div>
[/snippet]

For simpler page structures, you can create elements at thirds or fifths. Each column has a left and right margin of 10px and should use a column wrap to group columns into a row.

A simple column cannot be nested within another column. Eg putting a half column inside another half column won't result in a quarter column.