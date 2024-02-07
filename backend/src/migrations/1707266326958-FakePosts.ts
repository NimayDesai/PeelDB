import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1707259471507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Kayveo', 'for profit', '588-544-3418', '486 Nova Avenue', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'bmeader0@irs.gov');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Buzzdog', 'non profit', '255-400-6023', '53 Shasta Plaza', 1, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'eblowers1@acquirethisname.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Devcast', 'for profit', '427-581-1338', '89442 Loftsgordon Circle', 1, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'bpendleton2@networksolutions.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Dabjam', 'non profit', '122-450-5837', '3 Hermina Drive', 1, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'acommin3@mysql.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Browsecat', 'non profit', '124-483-0393', '0557 School Junction', 1, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'mingley4@disqus.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Camido', 'for profit', '133-379-1167', '1063 Crest Line Junction', 1, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'rnucciotti5@npr.org');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Kimia', 'non profit', '302-327-8949', '56 Forest Place', 1, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'siorizzo6@google.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Twitterwire', 'for profit', '408-493-1799', '79545 Beilfuss Road', 1, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'vsoloway7@yellowbook.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Centimia', 'for profit', '558-499-6859', '2 Porter Trail', 1, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'klaste8@twitpic.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Roodel', 'for profit', '441-278-1949', '2 Cherokee Drive', 1, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'tjuszczyk9@nyu.edu');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Avamba', 'non profit', '844-547-9081', '29 Shopko Court', 1, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'fmacririea@aboutads.info');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Rhyzio', 'non profit', '644-777-6433', '4813 Thackeray Terrace', 1, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'cminallb@phpbb.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skaboo', 'non profit', '898-587-6123', '96367 Waubesa Alley', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'rlawnc@cam.ac.uk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Kwideo', 'non profit', '542-322-9179', '7 Northview Crossing', 1, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'bfossd@epa.gov');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Trilia', 'non profit', '782-594-6141', '877 Vera Alley', 1, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'trimee@squarespace.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Plajo', 'non profit', '651-474-2455', '3733 Sundown Street', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'mgogginsf@dmoz.org');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Buzzbean', 'for profit', '940-377-1237', '40678 Thackeray Avenue', 1, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'sculverhouseg@cyberchimps.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Edgetag', 'for profit', '130-171-4692', '29020 Kinsman Road', 1, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'bgotmannh@smugmug.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Fanoodle', 'non profit', '866-771-0348', '77395 Marquette Park', 1, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'lbeecrofti@jimdo.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zooveo', 'for profit', '125-930-7981', '36030 Amoth Alley', 1, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'iscoblej@example.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skipstorm', 'non profit', '753-475-8922', '09474 Gulseth Hill', 1, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'cgittingk@posterous.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skynoodle', 'for profit', '292-883-9056', '3 Oak Hill', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'pclayworthl@mapy.cz');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Youtags', 'non profit', '510-127-2010', '214 Straubel Hill', 1, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'nbenyonm@yellowpages.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Lajo', 'non profit', '428-748-8205', '688 Carberry Court', 1, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'abouldern@histats.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Pixope', 'for profit', '197-905-1713', '86 Waywood Center', 1, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'fmaccaheyo@sohu.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Feedfire', 'non profit', '419-165-1248', '86977 Annamark Park', 1, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'mpenniellp@tripod.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Bluejam', 'non profit', '925-422-2469', '20 Browning Court', 1, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'ddingivanq@sina.com.cn');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Realcube', 'for profit', '868-739-3631', '02487 Northview Court', 1, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'lgodmarr@rakuten.co.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Meezzy', 'for profit', '445-935-2735', '7304 Moland Center', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'obettiss@omniture.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Trupe', 'non profit', '709-424-1426', '972 Gerald Drive', 1, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'nmcanalleyt@e-recht24.de');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Innotype', 'non profit', '321-257-8967', '035 Morningstar Point', 1, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'dconsidineu@prweb.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Kazio', 'non profit', '997-618-7225', '51497 Eagan Park', 1, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'sselwynv@auda.org.au');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Teklist', 'non profit', '406-136-8820', '80 Elmside Way', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'jmoulew@amazon.co.uk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Riffpath', 'for profit', '644-900-1786', '8418 Namekagon Alley', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'jjensonx@i2i.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Vinder', 'for profit', '340-130-1855', '52 Kensington Road', 1, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'tlutschy@goodreads.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zoovu', 'non profit', '548-134-5892', '64412 West Alley', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'gedgerleyz@biblegateway.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Gabtune', 'for profit', '550-741-6245', '16 Bunting Terrace', 1, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'mginner10@free.fr');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Twinte', 'non profit', '802-220-9521', '225 Bunting Crossing', 1, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'ckepling11@google.com.hk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Eamia', 'non profit', '321-188-0364', '4 Eagle Crest Lane', 1, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'jgarken12@nba.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Gevee', 'non profit', '881-734-8606', '53954 Monument Avenue', 1, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'ekinnie13@shareasale.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Feednation', 'non profit', '808-465-5713', '0 Waxwing Parkway', 1, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'mmacnally14@go.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zoozzy', 'for profit', '112-922-4378', '9143 Autumn Leaf Junction', 1, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'edunnet15@booking.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Gigashots', 'for profit', '283-900-2522', '1 Eastwood Crossing', 1, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'mstockbridge16@cdc.gov');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Quire', 'for profit', '184-156-4937', '0 Lakewood Center', 1, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 'arathke17@webmd.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skinder', 'for profit', '629-769-5797', '96 Lillian Circle', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'jsurgey18@weibo.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Quatz', 'for profit', '774-131-3924', '42539 Hooker Court', 1, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'sflintoff19@hibu.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Feedmix', 'for profit', '810-657-3478', '939 Jenna Crossing', 1, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'cmawditt1a@dion.ne.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Tagcat', 'non profit', '282-770-0155', '8251 Mallory Alley', 1, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'elownsbrough1b@usatoday.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Quire', 'non profit', '359-677-2185', '617 Kingsford Way', 1, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'hgottschalk1c@spotify.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Jabberbean', 'for profit', '809-216-1961', '292 Darwin Place', 1, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'rlitterick1d@jimdo.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skilith', 'non profit', '343-494-4193', '27393 Declaration Drive', 1, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'mascough1e@spotify.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Browsetype', 'for profit', '464-688-7689', '51 Quincy Lane', 1, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'cescritt1f@twitter.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Aibox', 'non profit', '128-346-0320', '545 Carioca Avenue', 1, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'fmeininger1g@hibu.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Rhynyx', 'for profit', '942-370-7280', '7123 Bobwhite Park', 1, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'mphilbin1h@facebook.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Abata', 'non profit', '189-735-8903', '656 Park Meadow Point', 1, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'aniesegen1i@mlb.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zooveo', 'non profit', '595-305-1343', '1641 Ohio Avenue', 1, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'omartinolli1j@php.net');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Trupe', 'for profit', '388-139-3821', '889 Charing Cross Lane', 1, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'cdarragh1k@wikimedia.org');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Camimbo', 'for profit', '730-423-8411', '208 Welch Circle', 1, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'kmcswan1l@squarespace.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Blognation', 'non profit', '949-913-4724', '7 Comanche Road', 1, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'mworster1m@deviantart.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Rooxo', 'non profit', '882-750-8459', '5 3rd Trail', 1, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'hgozard1n@4shared.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Twitterbridge', 'non profit', '897-705-5901', '352 Lotheville Circle', 1, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'selster1o@oakley.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Miboo', 'for profit', '596-880-1367', '10 Stephen Way', 1, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'gmattack1p@vkontakte.ru');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Buzzster', 'for profit', '743-538-0362', '6202 Westridge Hill', 1, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'bneeds1q@scribd.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Kanoodle', 'non profit', '334-930-9575', '0 Stuart Park', 1, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'mnudd1r@vinaora.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Reallinks', 'for profit', '124-367-8373', '064 Riverside Avenue', 1, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'kyerrall1s@nytimes.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Voolia', 'for profit', '113-544-2508', '40 Ohio Pass', 1, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'wduxbury1t@i2i.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Feedfire', 'for profit', '117-148-3211', '51786 Autumn Leaf Drive', 1, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'ccrighten1u@yandex.ru');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Photospace', 'non profit', '517-257-7153', '55028 6th Way', 1, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'zferry1v@bandcamp.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Avaveo', 'for profit', '198-223-5062', '8805 Bultman Drive', 1, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'nhallan1w@google.com.br');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Myworks', 'non profit', '773-570-9502', '61353 Jenna Place', 1, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 'dgeraudel1x@tuttocitta.it');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Wikibox', 'for profit', '127-276-4688', '53 Ilene Circle', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'rfolliss1y@bbc.co.uk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Podcat', 'non profit', '726-888-6147', '4306 Hudson Center', 1, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'ckingsmill1z@webeden.co.uk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zoovu', 'for profit', '466-157-9477', '99514 Heath Road', 1, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'fway20@bandcamp.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Tagchat', 'for profit', '364-940-9079', '954 4th Parkway', 1, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'hmacmickan21@whitehouse.gov');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Reallinks', 'for profit', '374-178-7145', '677 Golf Crossing', 1, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'flymbourne22@naver.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Aibox', 'non profit', '507-516-8841', '42 3rd Circle', 1, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'alenton23@tripadvisor.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Skibox', 'non profit', '493-777-1920', '0862 Blaine Avenue', 1, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'ldehooch24@flickr.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Jatri', 'non profit', '523-266-6056', '2 Rockefeller Drive', 1, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'npickthall25@shareasale.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zoomlounge', 'for profit', '829-447-1932', '57676 Fair Oaks Center', 1, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'hdemogeot26@google.ru');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Riffpedia', 'non profit', '868-507-5270', '2856 Northwestern Road', 1, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'jarnaldi27@biblegateway.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zava', 'for profit', '207-221-3718', '71290 Manley Court', 1, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'kslaight28@prweb.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Jayo', 'for profit', '792-715-6236', '9 Ridgeview Point', 1, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'dverdey29@biglobe.ne.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('InnoZ', 'for profit', '147-986-7364', '166 Gerald Terrace', 1, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'aknibbs2a@xrea.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Yacero', 'non profit', '437-727-2113', '07 Brown Parkway', 1, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'bbilovsky2b@disqus.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Youopia', 'non profit', '122-741-7149', '1871 Morningstar Road', 1, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'cgawn2c@studiopress.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Topicshots', 'for profit', '104-268-7570', '3900 Continental Street', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'arowbury2d@prnewswire.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Centizu', 'non profit', '330-249-7721', '64 Canary Point', 1, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'apomeroy2e@infoseek.co.jp');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Vipe', 'for profit', '289-395-7678', '785 Corry Park', 1, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'bwhenman2f@guardian.co.uk');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Brainverse', 'for profit', '720-100-9000', '88 Westport Hill', 1, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'ebrickell2g@mail.ru');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Yotz', 'non profit', '520-575-7906', '3408 Pierstorff Plaza', 1, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'wfreeman2h@edublogs.org');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Voolith', 'for profit', '196-343-1029', '58952 Mesta Trail', 1, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'ydaouse2i@sogou.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Fatz', 'non profit', '189-613-7751', '4 Loomis Street', 1, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'ybrunsen2j@arstechnica.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Feedfish', 'non profit', '194-365-1422', '93 Kensington Place', 1, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'glestor2k@posterous.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Mydo', 'for profit', '127-939-4046', '1696 Algoma Park', 1, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'elafflin2l@51.la');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Zazio', 'non profit', '830-790-1484', '41 Basil Crossing', 1, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'brance2m@simplemachines.org');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Centidel', 'non profit', '738-850-0915', '6 Vidon Circle', 1, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'lsember2n@oakley.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Quaxo', 'for profit', '930-371-3603', '52 Fordem Plaza', 1, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'gpeabody2o@comcast.net');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Jaxbean', 'for profit', '912-961-6017', '9672 5th Alley', 1, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'bmitskevich2p@spiegel.de');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Oozz', 'for profit', '489-711-8396', '25444 Huxley Road', 1, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'adyball2q@amazonaws.com');
insert into organization (name, "typeOfOrganization", "phoneNumber", address, "creatorId", description, email) values ('Avamm', 'non profit', '255-422-8056', '56 Almo Court', 1, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'swinters2r@foxnews.com');

        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
