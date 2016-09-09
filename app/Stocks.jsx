import React, { Component } from 'react';

export default class Stocks extends Component {
    render() {
        let graph_bar_style = {};
        const thirty_days_history = this.props.content.stocks[0].thirty_days_history.map((day, index) => {
            graph_bar_style = {'height': ((day).toString() + 'px'), 'top':((75 - day).toString() + 'px')};
            return(
                <div style={graph_bar_style} className="stocks_graph_chart_bar" key={index}></div>
            );
        });

        let x_axis_interval = -13, line_graph_coordinates = '';
        this.props.content.stocks[0].thirty_days_history.forEach((day, index) => {
            x_axis_interval += 13;
            line_graph_coordinates += x_axis_interval.toString() + ',' +
            (75-this.props.content.stocks[0].thirty_days_history[index]) + ' '
        });

        let last_nine_months_history_month_style = {};
        const last_nine_months_history = this.props.content.stocks[0].last_nine_months_history.map((month, index) => {
            last_nine_months_history_month_style = {
                'height': (44*month[1]).toString() + 'px',
                'top': (44 - (44*month[1])).toString() + 'px'
            };
            last_nine_months_history_month_style.backgroundColor =
                this.props.content.stocks[0].last_nine_months_history[index][0] === -1 ? '#F84E0F' : '#71B68C';
            return(
                <div className="stocks_info_overview_graph_bar" key={index}>
                  <div style={last_nine_months_history_month_style} className="stocks_info_overview_graph_bar_amount"></div>
                </div>
            );
        });

        return(
            <section id="stocks_container">
              <section id="stocks_graph">
                <section id="stocks_graph_growth_text">
                  <h1>
                    {this.props.content.stocks[0].thirty_days_growth >= 0 ? String.fromCharCode(9650) : String.fromCharCode(9660)}
                    {this.props.content.stocks[0].thirty_days_growth}
                  </h1>
                  <span>
                    {this.props.content.stocks[0]['24_hours_growth'] >= 0 ? '+' : '-' }
                    {this.props.content.stocks[0]['24_hours_growth']}
                    &nbsp;({this.props.content.stocks[0]['24_hours_growth_percentage']}%)
                  </span>
                </section>
                <section id="stocks_graph_chart">
                  <section id="stocks_graph_chart_lines_container">
                    <svg id="stocks_graph_chart_lines" viewBox="0 0 400 75">
                      <polyline
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        points={line_graph_coordinates}
                      />
                    </svg>
                  </section>
                  <section id="stocks_graph_chart_bars">
                    {thirty_days_history}
                  </section>
                </section>
              </section>

              <section id="stocks_info">
                Today 2:25 PM
                <h2>Salt Lake City, Utah</h2>
                <section id="stocks_info_overview">
                  <section id="stocks_info_overview_shares_traded">
                    <h3>13.5M</h3>
                    Shares Traded
                  </section>
                  <section id="stocks_info_overview_market_cap">
                    <h3>28.44M</h3>
                    Market Cap
                  </section>
                  <section id="stocks_info_overview_graph">
                    AAPL
                    <section id="stocks_info_overview_graph_bars">
                      {last_nine_months_history}
                    </section>
                  </section>
                  <section id="stocks_info_overview_yearly_change">
                    Yearly Change
                    <section id="stocks_info_overview_yearly_change_amount">+127.01</section>
                  </section>
                </section>
              </section>
            </section>
        );
    }
}
