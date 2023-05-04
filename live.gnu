set xrange [0:1200]
set yrange [200:340]

plot "log.dat" using 1:2 with lines

pause 1

reread
