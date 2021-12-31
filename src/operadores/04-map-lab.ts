import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, eget elementum libero tristique at. Nunc ut mauris semper, luctus velit nec, consectetur felis. Morbi est ex, posuere vitae tempor ac, malesuada a dui. Praesent interdum massa quis lectus vestibulum placerat. Morbi maximus fringilla nibh. In blandit arcu nec velit rutrum, sit amet pharetra urna luctus. Sed mollis semper sem, id tempor libero consequat sed. Phasellus efficitur vulputate tellus non pulvinar. Phasellus porta, arcu pulvinar venenatis elementum, orci purus auctor neque, sed sodales neque turpis quis sapien. In consequat enim vulputate, accumsan neque et, convallis purus. Integer at mi eget enim tincidunt ultrices. Integer condimentum pharetra dignissim. Aliquam erat volutpat.
<br />
<br />
Praesent ornare sem vel sollicitudin pharetra. Duis blandit, leo at euismod pulvinar, justo turpis sagittis lorem, sit amet auctor nunc ex nec quam. Suspendisse quis dignissim lacus. Mauris in nisl facilisis ipsum euismod pretium scelerisque nec urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eros erat, varius sit amet nibh eget, molestie dictum sem. Suspendisse tellus magna, tempus vitae ornare faucibus, pretium eget quam. Quisque ornare interdum varius. Nulla condimentum facilisis nisl, quis dictum ligula placerat sit amet. Praesent ultrices posuere turpis accumsan congue. Ut in lectus efficitur mi condimentum laoreet. Ut eros felis, iaculis vel risus a, scelerisque pulvinar nisl.
<br />
<br />
Quisque fringilla pretium lectus quis dapibus. Maecenas in ex pretium, ullamcorper ligula id, laoreet leo. Etiam vel rutrum felis. Integer sodales dolor et pellentesque iaculis. Cras venenatis leo in ligula auctor, vel ultricies dui malesuada. Proin cursus ornare mattis. Vivamus nibh lectus, dignissim et semper a, lacinia rutrum ex.
<br />
<br />
Ut ante sapien, rutrum ac tincidunt quis, euismod a lectus. Sed nec sapien interdum, dignissim mauris vitae, maximus felis. Nunc diam mi, luctus vitae metus ut, ornare porta sapien. Quisque a gravida ex. Vestibulum at erat vitae enim pharetra placerat egestas quis odio. In risus magna, vehicula quis risus a, mattis condimentum tortor. Curabitur sit amet faucibus nunc, ac dapibus ante. Etiam molestie mauris a lorem fringilla, vel mattis eros elementum. Donec rhoncus aliquam purus, in dictum dolor dignissim vitae. In tortor sem, condimentum ac turpis sed, accumsan efficitur metus. Phasellus diam lorem, aliquam at rutrum vitae, rhoncus at ligula. Phasellus ornare est ex, vitae lobortis arcu semper ac. Vestibulum euismod hendrerit lectus, ac aliquam lacus molestie et. Suspendisse auctor luctus ex, non scelerisque tellus efficitur sit amet. Vestibulum accumsan, risus ac auctor pellentesque, purus diam lacinia dolor, in vestibulum magna nisi ut tortor. Phasellus metus sapien, vehicula quis volutpat et, maximus eu eros.
<br />
<br />
Curabitur auctor tellus ac eros rhoncus, quis gravida ligula consequat. Donec venenatis fermentum purus, vitae pellentesque urna malesuada a. Praesent bibendum varius magna id mattis. Nullam et porta justo. Maecenas sagittis sem lacus, sit amet laoreet enim vestibulum non. Praesent ut ipsum vel urna ullamcorper convallis quis quis nibh. Nullam fermentum luctus est vel pulvinar. Etiam sed leo nec turpis tempor tincidunt. Donec tristique orci et diam accumsan, eu ullamcorper turpis viverra. Curabitur vehicula gravida eros, ut pharetra mauris finibus id. Vestibulum mollis dolor id felis laoreet mattis. Phasellus vestibulum consequat ante.
<br />
<br />
Morbi mattis ligula id neque placerat consequat. Pellentesque viverra leo a augue luctus suscipit. Pellentesque efficitur neque a tellus dapibus dignissim. In eget mauris at turpis hendrerit tincidunt id eget elit. Pellentesque elit lectus, aliquam sit amet fermentum et, dictum non purus. Vestibulum molestie fermentum nisi, at accumsan sapien pellentesque sed. Proin ut vehicula odio. Nam iaculis eget metus eu porttitor. In hac habitasse platea dictumst. Sed nisi risus, condimentum ac cursus eu, porttitor sit amet est.
<br />
<br />
Vestibulum sed lectus vitae mauris vestibulum eleifend. Cras eget cursus quam, laoreet blandit ipsum. Nulla ornare, quam vel faucibus ullamcorper, ante risus rutrum nulla, at tincidunt dui ex eu enim. Donec at velit hendrerit, egestas est eget, porttitor nisi. Praesent in laoreet velit. Aliquam viverra odio dui. Fusce dui ex, venenatis eget imperdiet eu, dictum ac risus. Aliquam suscipit, orci ut ultrices luctus, lectus mi commodo libero, id tempus lorem nisi vel magna. Nulla quis varius arcu. Maecenas nisl massa, tempus et risus in, fringilla blandit dui. Pellentesque eget fringilla velit, at dignissim mauris. Mauris nec lacus eu lorem aliquam consequat ac sit amet nunc. Pellentesque at venenatis ipsum. Suspendisse scelerisque augue sem, in rutrum metus condimentum nec. Nam volutpat in mi a consequat.
<br />
<br />
Mauris tincidunt malesuada fermentum. Vestibulum congue, felis id vestibulum scelerisque, orci mi facilisis est, eget tempus erat libero eget arcu. Cras velit arcu, volutpat quis facilisis ac, lobortis in nisi. Sed pulvinar ac leo nec consequat. Vestibulum enim felis, consectetur sit amet pharetra id, ullamcorper id orci. Fusce vitae risus in risus porta tincidunt at sit amet arcu. Nam vel porttitor dolor. Nullam volutpat ex at bibendum pellentesque. Donec libero dui, cursus a posuere at, interdum sed nisl. Maecenas non risus id libero ullamcorper laoreet. Suspendisse potenti. Vestibulum purus mauris, volutpat quis enim facilisis, porttitor dignissim dui. Ut vel felis ornare, scelerisque turpis vitae, convallis tortor. Sed feugiat, sapien non bibendum auctor, est purus dapibus quam, vel luctus elit libero mollis neque.
<br />
<br />
Sed sit amet venenatis odio, et vulputate justo. Nullam viverra, sem sit amet semper condimentum, neque tortor mollis massa, id pretium ante velit condimentum nibh. Vestibulum maximus tortor lorem, eu aliquam neque imperdiet a. Nullam enim ante, aliquam non consectetur nec, ornare at neque. Donec bibendum hendrerit bibendum. Nam fermentum, nibh ac pretium sodales, elit nisl consectetur mauris, ac consequat lacus neque ut risus. Integer a ornare nisi, vitae commodo ante. Ut quis aliquam est. Vestibulum posuere luctus tortor, non sollicitudin erat accumsan ut. Suspendisse tincidunt, nulla id ultricies mollis, turpis nunc euismod ex, at pretium risus velit nec lorem. Pellentesque faucibus sollicitudin mi non semper.
<br />
<br />
Vestibulum suscipit maximus nibh sit amet hendrerit. Donec eleifend elit interdum risus porta vulputate. Integer vehicula lorem vitae diam malesuada, eget mollis magna rhoncus. Phasellus eros nibh, dapibus ac sapien vitae, euismod aliquam sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eget consequat purus. Sed ultricies commodo sapien eget posuere. Suspendisse fermentum, erat non placerat pretium, magna turpis commodo felis, sit amet consequat leo orci ut tellus. Ut sed elit ante. Sed et nisl lectus. Nulla pretium, tortor egestas accumsan tristique, dolor lacus finibus libero, eget venenatis mauris est ac ex. Donec viverra interdum sem, vel lacinia metus dapibus id. Quisque tempor faucibus elit, ut tempus risus tincidunt a.
<br />
<br />
Sed at varius dolor. Pellentesque quis lobortis urna. Pellentesque tincidunt vestibulum sem, ut bibendum erat maximus eget. Nulla et mi quam. Donec imperdiet leo ultrices ex aliquam, sed eleifend turpis lacinia. Donec at ullamcorper velit. Suspendisse vitae mollis ligula, eu scelerisque arcu. Quisque cursus dignissim nulla vitae ultricies. Nunc ut mi ac orci pulvinar vestibulum sit amet sit amet magna. Vivamus eu tristique neque, id vestibulum felis. Suspendisse ac ligula a massa hendrerit dapibus dapibus id nibh.
<br />
<br />
In hac habitasse platea dictumst. Nulla id diam blandit dui placerat lacinia. Vivamus dictum libero a quam tempus bibendum. Nunc sed enim diam. Duis efficitur magna velit, et elementum nulla scelerisque ut. Phasellus sagittis gravida elit quis hendrerit. Sed dapibus lacus eget enim scelerisque dictum. Mauris et feugiat felis. Pellentesque rhoncus vestibulum ante, nec dignissim nulla tristique id. Praesent auctor sagittis dictum. Aenean ut nisl non turpis vehicula accumsan a eget sem. Nullam rhoncus nibh et nunc porttitor, ac rhoncus velit dapibus. Vivamus et diam sed enim porttitor viverra in a turpis.
<br />
<br />
Nulla dapibus, ex sed mattis tincidunt, erat nunc tristique tellus, sit amet tempus purus magna ut arcu. Proin at malesuada mauris, eu maximus justo. Etiam faucibus commodo eros nec maximus. Vivamus vitae neque vitae nisi ultrices tempus. Cras ut turpis mollis, placerat nisl in, interdum dolor. Nulla maximus nulla ac mattis aliquam. Mauris non nulla risus. Proin at interdum dui. Aenean tincidunt varius arcu, sit amet porttitor ipsum efficitur sit amet. Phasellus vel dolor at metus rhoncus dapibus sed at leo. Donec ex nibh, vulputate non vestibulum sodales, porttitor nec urna. Duis et dolor et orci aliquet elementum fermentum vitae odio. Vestibulum egestas, augue vel pulvinar efficitur, neque purus semper tellus, ut feugiat libero nunc quis nisl. Donec vitae est at nisi bibendum aliquam eget at lorem.
<br />
<br />
Donec ultricies felis eu iaculis dapibus. Praesent semper quam urna, vel fermentum metus sollicitudin id. Quisque ultricies tortor mi, et malesuada massa varius sit amet. Donec aliquet ex sed congue sagittis. Sed pellentesque, enim eget viverra sagittis, nulla libero mattis sem, varius tempus tortor dolor ut nulla. Fusce eget metus ultricies, pellentesque ex a, luctus felis. Aliquam felis leo, ullamcorper quis nulla id, bibendum molestie urna.
<br />
<br />
Phasellus consectetur accumsan lectus id vulputate. Mauris a erat tempor, interdum urna non, fringilla nulla. Nam sodales massa ac est bibendum, ut molestie diam dapibus. Mauris suscipit mauris ut turpis maximus, at lacinia lorem consectetur. In venenatis nunc est. Maecenas at metus nibh. Proin elementum metus id massa dictum efficitur. Cras vitae elementum lectus, in gravida massa. In aliquam tellus magna, at fringilla dolor viverra id. Fusce luctus porta sem non dapibus. Etiam pulvinar arcu in dignissim sodales.
<br />
<br />
Phasellus ultrices sagittis ipsum vel porta. Pellentesque lobortis massa sit amet congue aliquet. Ut eu est euismod, dictum mauris et, dignissim enim. Mauris in arcu dolor. Sed cursus elit ac vulputate varius. Praesent sed mauris nisi. Sed id lectus ex. Sed eleifend orci odio. Etiam suscipit, mi id sagittis cursus, lectus massa aliquet velit, a volutpat lorem orci sit amet nibh. Nulla facilisi. Ut venenatis sodales mollis.
<br />
<br />
Fusce eleifend commodo elit, quis pretium justo finibus in. Vivamus cursus a odio ut pellentesque. Cras non porta velit, vel malesuada justo. Cras venenatis neque mollis sagittis eleifend. Phasellus euismod id velit id ultricies. Aliquam dignissim ligula enim. In sit amet tristique lectus. Vestibulum ullamcorper, urna ac blandit ultrices, arcu tortor pulvinar enim, eget pellentesque lectus odio eget mauris. Phasellus aliquet erat eu quam rhoncus pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo sit amet diam sollicitudin placerat. Pellentesque eleifend, metus in pharetra suscipit, diam odio gravida orci, eget sodales nisl metus posuere metus. In urna quam, ultricies ut consectetur id, eleifend a nibh.
<br />
<br />
Duis in sagittis eros, ac pharetra quam. Aliquam lacinia aliquet ultrices. Nunc tempus ullamcorper luctus. Suspendisse tincidunt vitae sem cursus vehicula. Morbi bibendum velit sit amet orci hendrerit semper. Nam iaculis vitae augue vitae consequat. Donec consequat id lorem a tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis cursus tincidunt. Phasellus eu quam ac dui scelerisque maximus sed a nisi. Sed arcu lectus, porta quis leo sit amet, ullamcorper pulvinar elit.
<br />
<br />
Curabitur sit amet consectetur purus. Curabitur tincidunt orci quis purus tempus commodo. Sed laoreet lectus et semper dapibus. Curabitur a diam neque. Phasellus vitae purus lectus. Phasellus gravida velit eget odio imperdiet faucibus. Fusce id libero eget nulla accumsan congue ut nec risus. Sed vehicula eget est sed rutrum. Aenean faucibus imperdiet est non semper.
<br />
<br />
Morbi finibus quis lorem tempus viverra. Morbi pellentesque venenatis tortor eget gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ornare id justo nec aliquet. Pellentesque eu ligula velit. Cras dolor sem, aliquet eget nisi eget, tincidunt mattis dolor. Nullam non viverra elit. Nam maximus, est in convallis tempor, ex elit lobortis sem, a dignissim risus quam nec metus. Nam ac eros dictum, pretium sapien egestas, interdum sem. Donec sit amet metus et erat blandit commodo ut semper velit. Quisque varius sit amet dolor non condimentum. Suspendisse ac ultricies enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin blandit leo quis sapien ultrices feugiat. Mauris interdum lobortis nisi sed gravida.
<br />
<br />
Sed porta congue ipsum feugiat mattis. Curabitur suscipit viverra quam, sit amet tristique sem venenatis vel. Vestibulum ac pretium neque, ut dapibus lectus. Donec in augue accumsan est interdum pulvinar. Donec sit amet lectus eu sapien ullamcorper bibendum. Donec vitae dui nunc. Proin euismod euismod dictum. Sed placerat posuere sem, eget mattis mi viverra a. Suspendisse dolor lectus, aliquam eu augue sed, mattis porta nisl.`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calcScrollPercentage = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(map(calcScrollPercentage));

progress$.subscribe((width) => (progressBar.style.width = `${width}%`));
