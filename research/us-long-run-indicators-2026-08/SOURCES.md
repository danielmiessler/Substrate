# Sources

The authoritative per-series source list is generated from the data itself: [`Data/US-Long-Run-Indicators/source.md`](../../Data/US-Long-Run-Indicators/source.md). Publishers: BLS, BEA, Census Bureau, Federal Reserve Board / FRED, Freddie Mac, EIA, NOAA NCEI, FBI Crime Data Explorer, CDC/NCHS (SODA + published tables), BJS, World Happiness Report, Pew Research Center, World Bank (Gini, via FRED), NASDAQ (via FRED).

Historical splices (all disclosed per series in `_meta.note` + `historicalSourceUrls`): FBI CIUS 1995/2010 tables (crime 1976–1999), NCHS Health E-Stat and MVSR tables (marriage/divorce 1970–1999), NVSR 66-1 (fertility 1970–1999), BJS Prisoners in 2020 + 2023 (imprisonment, overlap-verified in code), EIA API annual history (CO2 1949–1972).
