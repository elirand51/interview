import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
        {
            config.map(
                conf => (
                    <th key={conf.title}>{conf.title}</th>
                )
            )
        }
    </tr>
    </thead>
    <tbody>
    {
        data.map(
            data_ => (
                <tr key={data_.imdbID}>
                    {
                        config.map(
                            conf => (
                                <th key={conf.field}>
                                    {conf.component? conf.component({data: data_}) : data_[conf.field]}
                                </th>
                            )
                        )
                    }
                </tr>
            )
        )
    }
    </tbody>
  </table>
);

export default Grid;
