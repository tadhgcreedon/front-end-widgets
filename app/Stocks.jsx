import React, { Component } from 'react';

export default class Stocks extends Component {
    render() {
        // creates and returns the divs that make up the 30 day bar chart based on data from the widget_contents JSON file
        let graph_bar_style = {};
        const thirty_days_history = this.props.content.stocks[0].thirty_days_history.map((day, index) => {
            graph_bar_style = {'height': ((day).toString() + 'px'), 'top':((75 - day).toString() + 'px')};
            return(
                <div style={graph_bar_style} className="stocks_graph_chart_bar" key={index}></div>
            );
        });

        /* creates and returns a string filled with the appended coordinate values for the 30 day line chart based on data
            data from the widget_contents JSON file (to be used inside an SVG)*/
        let x_axis_interval = -13, line_graph_coordinates = '';
        this.props.content.stocks[0].thirty_days_history.forEach((day, index) => {
            x_axis_interval += 13;
            line_graph_coordinates += x_axis_interval.toString() + ',' +
            (75-this.props.content.stocks[0].thirty_days_history[index]) + ' '
        });

        //creates and returns the divs that make up the 9 month bar chart based on data from the widget_contents JSON file
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
                    {/*Determines whether to show an up arrow or down arrow based on whether value of thirty_days_growth
                    is positive of negative*/}
                    {this.props.content.stocks[0].thirty_days_growth >= 0 ? String.fromCharCode(9650) : String.fromCharCode(9660)}
                    {this.props.content.stocks[0].thirty_days_growth}
                  </h1>
                  <span>
                    {/*Determines whether to show a + or - based on whether value of 24_hours_growth
                    is positive of negative*/}
                    {this.props.content.stocks[0]['24_hours_growth'] >= 0 ? '+' : '-' }
                    {this.props.content.stocks[0]['24_hours_growth']}
                    &nbsp;({this.props.content.stocks[0]['24_hours_growth_percentage']}%)
                  </span>
                </section>
                <section id="stocks_graph_chart">
                  <section id="stocks_graph_chart_lines_container">
                    {/*Draws a responsive line chart using the coordinates generated above*/}
                    <svg id="stocks_graph_chart_lines" viewBox="0 0 400 75" aria-label="A line graph showing the value of the stock rising and falling over the last 30 days.">
                      <polyline
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        points={line_graph_coordinates}
                      />
                    </svg>
                  </section>
                  {/*Outputs the divs generated above that make up the 30 day bar chart*/}
                  <section id="stocks_graph_chart_bars" aria-label="A bar graph depicting the value of the stock rising and falling over each of the last 30 days.">
                    {thirty_days_history}
                  </section>
                </section>
              </section>

              <section id="stocks_info">
                {this.props.content.stocks[0].date}
                <h2>{this.props.content.stocks[0].city + ', ' + this.props.content.stocks[0].state}</h2>
                <section id="stocks_info_overview">
                  <section id="stocks_info_overview_shares_traded">
                    <h3>{this.props.content.stocks[0].shares_traded + 'M'}</h3>
                    Shares Traded
                  </section>
                  <section id="stocks_info_overview_market_cap">
                    <h3>{this.props.content.stocks[0].market_cap + 'M'}</h3>
                    Market Cap
                  </section>
                  <section id="stocks_info_overview_graph">
                    {this.props.content.stocks[0].abbreviation}
                    {/*Outputs the divs generated above that make up the 30 day bar chart*/}
                    <section id="stocks_info_overview_graph_bars" aria-label="A bar graph indicating the individual growth or decline for each of the last 9 months.">
                      {last_nine_months_history}
                    </section>
                  </section>
                  <section id="stocks_info_overview_yearly_change">
                    Yearly Change
                    <section id="stocks_info_overview_yearly_change_amount">
                      {/*Determines whether to show a + or - based on whether value of yearly_change
                      is positive of negative*/}
                      {this.props.content.stocks[0]['yearly_change'] >= 0 ? '+' : '-' }
                      {this.props.content.stocks[0]['yearly_change']}
                    </section>
                  </section>
                </section>
              </section>
            </section>
        );
    }
}
