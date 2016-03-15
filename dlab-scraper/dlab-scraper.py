import requests
from bs4 import BeautifulSoup
import csv

sites = ['http://dlab.berkeley.edu/course-list', \
	'http://dlab.berkeley.edu/course-list/course-list?field_department_tid=All&amp;title=&amp;field_semester_value=Spring%202014&amp;field_description_value=&amp;page=1', \
	'http://dlab.berkeley.edu/course-list/course-list?field_department_tid=All&amp;title=&amp;field_semester_value=Spring%202014&amp;field_description_value=&amp;page=2', \
	'http://dlab.berkeley.edu/course-list/course-list?field_department_tid=All&amp;title=&amp;field_semester_value=Spring%202014&amp;field_description_value=&amp;page=3', \
	'http://dlab.berkeley.edu/course-list/course-list?field_department_tid=All&amp;title=&amp;field_semester_value=Spring%202014&amp;field_description_value=&amp;page=4', \
	'http://dlab.berkeley.edu/course-list/course-list?field_department_tid=All&amp;title=&amp;field_semester_value=Spring%202014&amp;field_description_value=&amp;page=5']

all_course_codes = []
all_course_titles = []
all_course_descriptions = []

for site in sites:
	page = requests.get(site)
	soup = BeautifulSoup(page.content, 'html.parser')

	course_titles = soup.select('tr > .views-field-title > a')
	for i in range(len(course_titles)):
	    all_course_titles.append(unicode(course_titles[i].string))

	course_codes = soup.select('tr > .views-field-field-course-code-text')[1:]
	for i in range(len(course_codes)):
	    all_course_codes.append(course_codes[i].contents[0].strip() + ' ' + unicode(course_codes[i].contents[1].contents[0]))

	course_descriptions = soup.select('tr > .views-field-field-description')[1:]
	for i in range(len(course_descriptions)):
	    all_course_descriptions.append(course_descriptions[i].contents[0].strip())

f = open('dlab-scraped.csv', 'wt')
writer = csv.writer(f)
writer.writerow(('Course', 'Title', 'Description'))
for i in range(len(all_course_codes)):
    writer.writerow((all_course_codes[i], all_course_titles[i], all_course_descriptions[i]))
f.close()
