--
-- Copyright (C) 2017-2019 Dremio Corporation
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--     http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.
--

-- tpch8 using 1395599672 as a seed to the RNG
select
  o_year,
  sum(case
    when nation = 'EGYPT' then volume
    else 0
  end) / sum(volume) as mkt_share
from
  (
    select
      extract(year from o.o_orderdate) as o_year,
      l.l_extendedprice * (1 - l.l_discount) as volume,
      n2.n_name as nation
    from
      cp.`tpch/part.parquet` p,
      cp.`tpch/supplier.parquet` s,
      cp.`tpch/lineitem.parquet` l,
      cp.`tpch/orders.parquet` o,
      cp.`tpch/customer.parquet` c,
      cp.`tpch/nation.parquet` n1,
      cp.`tpch/nation.parquet` n2,
      cp.`tpch/region.parquet` r
    where
      p.p_partkey = l.l_partkey
      and s.s_suppkey = l.l_suppkey
      and l.l_orderkey = o.o_orderkey
      and o.o_custkey = c.c_custkey
      and c.c_nationkey = n1.n_nationkey
      and n1.n_regionkey = r.r_regionkey
      and r.r_name = 'MIDDLE EAST'
      and s.s_nationkey = n2.n_nationkey
      and o.o_orderdate between date '1995-01-01' and date '1996-12-31'
      and p.p_type = 'PROMO BRUSHED COPPER'
  ) as all_nations
group by
  o_year
order by
  o_year;
