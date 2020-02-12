<template>
    <div class="row  border-bottom white-bg dashboard-header">

                    <div class="col-md-3">
                        <h2>Welcome Amelia</h2>
                        <small>You have 42 messages and 6 notifications.</small>
                        <ul class="list-group clear-list m-t">
                            <li class="list-group-item fist-item">
                                <span class="float-right">
                                    09:00 pm
                                </span>
                                <span class="label label-success">1</span> Please contact me
                            </li>
                            <li class="list-group-item">
                                <span class="float-right">
                                    10:16 am
                                </span>
                                <span class="label label-info">2</span> Sign a contract
                            </li>
                            <li class="list-group-item">
                                <span class="float-right">
                                    08:22 pm
                                </span>
                                <span class="label label-primary">3</span> Open new shop
                            </li>
                            <li class="list-group-item">
                                <span class="float-right">
                                    11:06 pm
                                </span>
                                <span class="label label-default">4</span> Call back to Sylvia
                            </li>
                            <li class="list-group-item">
                                <span class="float-right">
                                    12:00 am
                                </span>
                                <span class="label label-primary">5</span> Write a letter to Sandra
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="flot-chart dashboard-chart">
                            <div class="flot-chart-content" id="flot-dashboard-chart" style="padding: 0px; position: relative;"><canvas class="flot-base" width="960" height="360" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 480px; height: 180px;"></canvas><div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 11px; text-align: center;">0.0</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 82px; text-align: center;">2.5</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 152px; text-align: center;">5.0</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 222px; text-align: center;">7.5</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 289px; text-align: center;">10.0</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 360px; text-align: center;">12.5</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 60px; top: 163px; left: 430px; text-align: center;">15.0</div></div><div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"><div class="flot-tick-label tickLabel" style="position: absolute; top: 150px; left: 7px; text-align: right;">0</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 113px; left: 1px; text-align: right;">10</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 75px; left: 1px; text-align: right;">20</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 38px; left: 1px; text-align: right;">30</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 0px; left: 1px; text-align: right;">40</div></div></div><canvas class="flot-overlay" width="960" height="360" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 480px; height: 180px;"></canvas></div>
                        </div>
                        <div class="row text-left">
                            <div class="col">
                                <div class=" m-l-md">
                                <span class="h5 font-bold m-t block">$ 406,100</span>
                                <small class="text-muted m-b block">Sales marketing report</small>
                                </div>
                            </div>
                            <div class="col">
                                <span class="h5 font-bold m-t block">$ 150,401</span>
                                <small class="text-muted m-b block">Annual sales revenue</small>
                            </div>
                            <div class="col">
                                <span class="h5 font-bold m-t block">$ 16,822</span>
                                <small class="text-muted m-b block">Half-year revenue margin</small>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="statistic-box">
                        <h4>
                            Project Beta progress
                        </h4>
                        <p>
                            You have two project with not compleated task.
                        </p>
                            <div class="row text-center">
                                <div class="col-lg-6"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
                                    <canvas id="doughnutChart2" width="160" height="160" style="margin: 18px auto 0px; display: block; width: 80px; height: 80px;"></canvas>
                                    <h5>Kolter</h5>
                                </div>
                                <div class="col-lg-6"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
                                    <canvas id="doughnutChart" width="160" height="160" style="margin: 18px auto 0px; display: block; width: 80px; height: 80px;"></canvas>
                                    <h5>Maxtor</h5>
                                </div>
                            </div>
                            <div class="m-t">
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                            </div>

                        </div>
                    </div>
            </div>
</template>
