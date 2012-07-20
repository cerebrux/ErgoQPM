#!/bin/bash -x
#
# A simple script to strenghthen the security of the appliance
# Licensed under GPL2
# This program is distributed in the hope that it will be 
# useful, but WITHOUT ANY WARRANTY; without even the implied 
# warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR 
# PURPOSE. See the GNU General Public License for more 
# details, for your convenience attached below, also 
# published at http://www.gnu.org/copyleft/gpl.html 
#
# Editor: Salih Emin (http://about.me/salihemin)
# Version: v1.0
# Compatible: Foswiki >= 1.1.5

echo "All directories have exec bit for recursive reading"
find . -type d -exec chmod -c 755 {} \;

echo "Everything in root is read only"
find . -maxdepth 1 -type f -exec chmod -c 444 {} \;

echo "Files in data & pub writable by server, except for rcs files which are read-only"
find data -name '*.txt' -type f -exec chmod -c 644 {} \;
find pub -type f -exec chmod -c 644 {} \;
find data pub -name '*,v' -type f -exec chmod -c 444 {} \;

echo "Everything in data is writable by server."
find data -maxdepth 1 -type f -exec chmod -c 644 {} \;

echo "bin and tools needs to be executable - with exceptions"
find bin -type f -exec chmod -c 555 {} \;
chmod -c 644 bin/LocalLib.cfg.txt bin/.htaccess.txt
chmod -c 444 bin/setlib.cfg
find tools -type f -exec chmod -c 555 {} \;
chmod -c 444 tools/extender.pl

echo "Everything else is read only"
find lib -type f -exec chmod -c 444 {} \;
find locale -type f -exec chmod -c 444 {} \;
#find bin/logos -type f -exec chmod -c 444 {} \;
find templates -type f -exec chmod -c 444 {} \;

echo "Working is server writable - with exceptions"
find working -type f -exec chmod -c 644 {} \;
#find working/configure -type f -exec chmod -c 444 {} \;
chmod -c 444 working/tmp/README working/README working/registration_approvals/README
chmod -c 444 working/work_areas/README
chmod -c 660 working/.htaccess

echo "Restrict security related files should not be world readable."
find . -name .htaccess -exec chmod 440 {} \;
chmod -c 640 data/.htpasswd
chmod -c 640 lib/LocalSite.cfg
chmod -c 640 data/mime.types
