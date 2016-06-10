---
title: Date group
template:
type: partial
order: 4
show-snippet: true
---
[snippet]
<div class="form-group">
    <fieldset>
        <legend>Date of birth (&lt;legend&gt; same as h6)</legend>
        <div class="col-wrap">
            <div class="col col--fluid-3">
                <label class="control-label" for="dd">Day</label>
                <input type="text" class="form-control" id="dd" maxlength="2"
                       placeholder="DD">
            </div>
            <div class="col col--fluid-3">
                <label class="control-label" for="mm">Month</label>
                <input type="text" class="form-control" id="mm" maxlength="2"
                       placeholder="MM">
            </div>
            <div class="col col--fluid-3">
                <label class="control-label" for="yyyy">Year</label>
                <input type="text" class="form-control" id="yyyy" maxlength="4"
                       placeholder="YYYY">
            </div>
        </div>
    </fieldset>
</div>
[/snippet]