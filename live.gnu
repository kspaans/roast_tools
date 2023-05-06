set title "Roast"

set xlabel "Time"
set ylabel "Temp (f)"
set y2label "Power (%)"

set xrange [0:1200]
set yrange [200:330]
set y2rang [0:101]

set y2tics 0, 25
set ytics nomirror

plot "log.dat" using 1:2 axes x1y1 title "Env Temp" with lines, \
     "log.dat" using 1:3 axes x1y2 title "Power"    with lines

pause 1

reread
