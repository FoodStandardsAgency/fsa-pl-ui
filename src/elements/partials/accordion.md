---
title: Accordion
template:
type: partial
order: 5
show-snippet: true
---
[snippet]
<div class="wrapper content">
    <div class="col-wrap">
        <div class="col col--fluid-offset-1 col--fluid-10">
            <!--accordion-->
                <div class="padding-bottom--4"></div>
                <div class="accordion--header">
                    <h5>
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            Collapsible section header (same formatting as h5)
                        </a>
                    </h5>
                </div>
                <div id="collapseOne" class="col-wrap collapse in">
                    <div class="col col--fluid-15 margin-top--1 accordion--body">
                        In total, around a third of those with a food allergy have suffered a reaction in the last year
                        when
                        eating out of the home. The vast majority of these (25%) took place in a restaurant or cafe,
                        with 9%
                        being a result of takeaway food. In most cases (88%) the reaction was self-treated, with 19% of
                        reactions resulting in a hospital visit.
                    </div>
                </div>
                <div class="accordion--header">
                    <h5>
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                            Collapsible section header
                        </a>
                    </h5>
                </div>
                <div id="collapseTwo" class="col-wrap collapse">
                    <div class="col col--fluid-15 margin-top--1 accordion--body">
                        If anyone encounters a food business not providing information on the 14 allergens, they should
                        report it
                        to its local authority which will investigate.
                    </div>
                </div>
        </div>
    </div>
</div>
[/snippet]