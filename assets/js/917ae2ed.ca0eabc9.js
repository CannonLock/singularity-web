(self.webpackChunksingularity_web=self.webpackChunksingularity_web||[]).push([[825],{9390:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var i=t(2122),a=t(9756),o=(t(7294),t(3905)),r={id:"user_namespace",title:"User Namespaces & Fakeroot"},s={unversionedId:"user_namespace",id:"user_namespace",isDocsHomePage:!1,title:"User Namespaces & Fakeroot",description:"User namespaces are an isolation feature that allow processes to run",source:"@site/docs-admin/user_namespace.md",sourceDirName:".",slug:"/user_namespace",permalink:"/docs-admin/user_namespace",editUrl:"https://github.com/hpcng/singularity-web/edit/main/docs-admin/user_namespace.md",version:"current",frontMatter:{id:"user_namespace",title:"User Namespaces & Fakeroot"},sidebar:"someSidebar",previous:{title:"Configuration Files",permalink:"/docs-admin/configfiles"},next:{title:"Container Security",permalink:"/docs-admin/security"}},l=[{value:"User Namespace Requirements",id:"user-namespace-requirements",children:[]},{value:"Unprivileged Installations",id:"unprivileged-installations",children:[]},{value:"--userns option",id:"--userns-option",children:[]},{value:"Fakeroot feature",id:"fakeroot-feature",children:[]},{value:"Adding a fakeroot mapping",id:"adding-a-fakeroot-mapping",children:[]},{value:"Deleting, disabling, enabling mappings",id:"deleting-disabling-enabling-mappings",children:[]}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User namespaces are an isolation feature that allow processes to run\nwith different user identifiers and/or privileges inside that\nnamespace than are permitted outside. A user may have a ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," of\n",(0,o.kt)("inlineCode",{parentName:"p"},"1001")," on a system outside of a user namespace, but run programs\nwith a different ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," with different privileges inside the\nnamespace."),(0,o.kt)("p",null,"User namespaces are used with containers to make it possible to setup\na container without privileged operations, and so that a normal user\ncan act as root inside a container to perform administrative tasks,\nwithout being root on the host outside."),(0,o.kt)("p",null,"Singularity uses user namespaces in 3 situations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the ",(0,o.kt)("inlineCode",{parentName:"li"},"setuid")," workflow is disabled or Singularity was\ninstalled without root."),(0,o.kt)("li",{parentName:"ul"},"When a container is run with the ",(0,o.kt)("inlineCode",{parentName:"li"},"--userns")," option."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"--fakeroot")," is used to impersonate a root user when\nbuilding or running a container.")),(0,o.kt)("p",null,".. _userns-requirements:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"user-namespace-requirements"},"User Namespace Requirements"),(0,o.kt)("p",null,"To allow unprivileged creation of user namespaces a kernel >=3.8 is\nrequired, with >=3.18 being recommended due to security fixes for user\nnamespaces (3.18 also adds OverlayFS support which is used by Singularity)."),(0,o.kt)("p",null,"Additionally, some Linux distributions require that unprivileged user\nnamespace creation is enabled using a ",(0,o.kt)("inlineCode",{parentName:"p"},"sysctl")," or kernel command\nline parameter. Please consult your distribution documentation or\nvendor to confirm the steps necessary to 'enable unprivileged user\nnamespace creation'."),(0,o.kt)("h1",{id:"debian"},"Debian"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  sudo sh -c 'echo kernel.unprivileged_userns_clone=1 \\"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  >/etc/sysctl.d/90-unprivileged_userns.conf'\n")),(0,o.kt)("p",null,"  sudo sysctl -p /etc/sysctl.d /etc/sysctl.d/90-unprivileged_userns.conf"),(0,o.kt)("h1",{id:"rhelcentos-7"},"RHEL/CentOS 7"),(0,o.kt)("p",null,"From 7.4, kernel support is included but must be enabled with:"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  sudo sh -c 'echo user.max_user_namespaces=15000 \\"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  >/etc/sysctl.d/90-max_net_namespaces.conf'\n")),(0,o.kt)("p",null,"  sudo sysctl -p /etc/sysctl.d /etc/sysctl.d/90-max_net_namespaces.conf"),(0,o.kt)("p",null,".. _userns-limitations:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"unprivileged-installations"},"Unprivileged Installations"),(0,o.kt)("p",null,"As detailed in the :ref:",(0,o.kt)("inlineCode",{parentName:"p"},"non-setuid installation <install-nonsetuid>"),"\nsection, Singularity can be compiled or configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"allow\nsetuid = no")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"singularity.conf")," to not perform privileged\noperations using the ",(0,o.kt)("inlineCode",{parentName:"p"},"starter-setuid")," binary."),(0,o.kt)("p",null,"When singularity does not use ",(0,o.kt)("inlineCode",{parentName:"p"},"setuid")," all container execution will\nuse a user namespace. In this mode of operation, some features are not\navailable, and there are impacts to the security/integrity guarantees\nwhen running SIF container images:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All containers must be run from sandbox directories. SIF images are\nextracted to a sandbox directory on the fly, preventing\nverification at runtime, and potentially allowing external\nmodification of the container at runtime."),(0,o.kt)("li",{parentName:"ul"},"Filesystem image, and SIF-embedded persistent overlays cannot be\nused."),(0,o.kt)("li",{parentName:"ul"},"Encrypted containers cannot be used. Singularity mounts encrypted\ncontainers directly through the kernel, so that encrypted content\nis not extracted to disk. This requires the setuid workflow."),(0,o.kt)("li",{parentName:"ul"},"Fakeroot functionality will rely on external setuid root\n",(0,o.kt)("inlineCode",{parentName:"li"},"newuidmap")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"newgidmap")," binaries which may be provided by\nthe distribution.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"--userns-option"},"--userns option"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--userns")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"singularity run/exec/shell")," will start a\ncontainer using a user namespace, avoiding the setuid privileged\nworkflow for container setup even if Singularity was compiled and\nconfigured to use setuid by default."),(0,o.kt)("p",null,"The same limitations apply as in an unprivileged installation."),(0,o.kt)("p",null,".. _fakeroot:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"fakeroot-feature"},"Fakeroot feature"),(0,o.kt)("p",null,"Fakeroot (or commonly referred as rootless mode) allows an\nunprivileged user to run a container as a ",(0,o.kt)("strong",{parentName:"p"},'"fake root"')," user by\nleveraging user namespaces with ",(0,o.kt)("inlineCode",{parentName:"p"},"user namespace UID/GID mapping\n<http://man7.org/linux/man-pages/man7/user_namespaces.7.html>"),"_."),(0,o.kt)("p",null,"User namespace UID/GID mapping allows a user to act as a different\nUID/GID in the container than they are on the host. A user can access\na configured range of UIDs/GIDs in the container, which map back to\n(generally) unprivileged user UIDs/GIDs on the host. This allows a\nuser to be ",(0,o.kt)("inlineCode",{parentName:"p"},"root (uid 0)")," in a container, install packages etc., but\nhave no privilege on the host."),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In addition to user namespace support, Singularity must manipulate\n",(0,o.kt)("inlineCode",{parentName:"p"},"subuid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subgid")," maps for the user namepsace it creates. By\ndefault this happens transparently in the setuid workflow. With\nunprivileged installations of Singularity or where ",(0,o.kt)("inlineCode",{parentName:"p"},"allow setuid =\nno")," is set in ",(0,o.kt)("inlineCode",{parentName:"p"},"singularity.conf"),", Singularity attempts to use\nexternal setuid binaries ",(0,o.kt)("inlineCode",{parentName:"p"},"newuidmap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"newgidmap"),", so you\nneed to install those binaries on your system."),(0,o.kt)("h1",{id:"basics"},"Basics"),(0,o.kt)("p",null,"Fakeroot relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," files to find\nconfigured mappings from real user and group IDs, to a range of\notherwise vacant IDs for each user on the host system that can be\nremapped in the usernamespace. A user must have an entry in these\nsystem configuration files to use the fakeroot feature. Singularity\nprovides a :ref:",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot <config-fakeroot>")," command to assist\nin managing these files, but it is important to understand how they\nwork."),(0,o.kt)("p",null,"For user ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," an entry in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," might be:"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  foo:100000:65536"),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," is the username, ",(0,o.kt)("inlineCode",{parentName:"p"},"100000")," is the start of the UID\nrange that can be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," in a user namespace uid mapping, and\n",(0,o.kt)("inlineCode",{parentName:"p"},"65536")," number of UIDs available for mapping."),(0,o.kt)("p",null,"Same for ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),":"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  foo:100000:65536"),(0,o.kt)("p",null,".. note::"),(0,o.kt)("p",null,"  Some distributions add users to these files on installation, or when\n",(0,o.kt)("inlineCode",{parentName:"p"},"useradd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"adduser"),", etc. utilities are used to manage local\nusers."),(0,o.kt)("p",null,"  The glibc nss name service switch mechanism does not currently\nsupport managing ",(0,o.kt)("inlineCode",{parentName:"p"},"subuid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subgid")," mappings with external\ndirectory services such as LDAP. You must manage or provision\nmapping files direct to systems where fakeroot will be used."),(0,o.kt)("p",null,".. warning::"),(0,o.kt)("p",null,"  Singularity requires that a range of at least ",(0,o.kt)("inlineCode",{parentName:"p"},"65536")," IDs is used\nfor each mapping. Larger ranges may be defined without error."),(0,o.kt)("p",null,"  It is also important to ensure that the subuid and subgid ranges\ndefined in these files don't overlap with eachother, or any real\nUIDs and GIDs on the host system."),(0,o.kt)("p",null,"So if you want to add another user ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," will look like:"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  foo:100000:65536\nbar:165536:65536"),(0,o.kt)("p",null,"Resulting in the following allocation:"),(0,o.kt)("p",null,"+------+----------+----------------------+\n| User | Host UID | Sub UID/GID range    |\n+======+==========+======================+\n| foo  | 1000     | 100000 to 165535     |\n+------+----------+----------------------+\n| bar  | 1001     | 165536 to 231071     |\n+------+----------+----------------------+"),(0,o.kt)("p",null,"Inside a user namespace / container, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," can now act\nas any UID/GID between 0 and 65536, but these UIDs are confined to the\ncontainer. For ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," UID 0 in the container will map to the host\n",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," UID ",(0,o.kt)("inlineCode",{parentName:"p"},"1000")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1 to 65536")," will map to ",(0,o.kt)("inlineCode",{parentName:"p"},"100000-165535"),"\noutside of the container etc. This impacts the ownership of files,\nwhich will have different IDs inside and outside of the container."),(0,o.kt)("p",null,".. note::"),(0,o.kt)("p",null,"   If you are managing large numbers of fakeroot mappings you may wish\nto specify users by UID rather than username in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," files. The man page for ",(0,o.kt)("inlineCode",{parentName:"p"},"subuid")," advises:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," When large number of entries (10000-100000 or more) are defined in\n /etc/subuid, parsing performance penalty will become noticeable. In\n this case it is recommended to use UIDs instead of login\n names. Benchmarks have shown speed-ups up to 20x.\n")),(0,o.kt)("h1",{id:"filesystem-considerations"},"Filesystem considerations"),(0,o.kt)("p",null,"Based on the above range, here we can see what happens when the user\n",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," create files with ",(0,o.kt)("inlineCode",{parentName:"p"},"--fakeroot")," feature:"),(0,o.kt)("p",null,"+--------------------------------+----------------------------------+\n| Create file with container UID | Created host file owned by UID   |\n+================================+==================================+\n| 0 (default)                    | 1000                             |\n+--------------------------------+----------------------------------+\n| 1 (daemon)                     | 100000                           |\n+--------------------------------+----------------------------------+\n| 2 (bin)                        | 100001                           |\n+--------------------------------+----------------------------------+"),(0,o.kt)("p",null,"Outside of the fakeroot container the user may not be able to remove\ndirectories and files created with a subuid, as they do not match with\nthe user's UID on the host. The user can remove these files by using a\ncontainer shell running with fakeroot."),(0,o.kt)("h1",{id:"network-configuration"},"Network configuration"),(0,o.kt)("p",null,"With fakeroot, users can request a container network named\n",(0,o.kt)("inlineCode",{parentName:"p"},"fakeroot"),", other networks are restricted and can only be used by\nthe real host root user. By default the ",(0,o.kt)("inlineCode",{parentName:"p"},"fakeroot")," network is\nconfigured to use a network veth pair."),(0,o.kt)("p",null,".. warning::"),(0,o.kt)("p",null,"   Do not change the ",(0,o.kt)("inlineCode",{parentName:"p"},"fakeroot")," network type in\n",(0,o.kt)("inlineCode",{parentName:"p"},"etc/singularity/network/40_fakeroot.conflist")," without\nconsidering the security implications."),(0,o.kt)("p",null,".. note::"),(0,o.kt)("p",null,"  Unprivileged installations of Singularity cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"fakeroot"),"\nnetwork as it requires privilege during container creation to setup\nthe network."),(0,o.kt)("p",null,".. _config-fakeroot:"),(0,o.kt)("h1",{id:"configuration-with-config-fakeroot"},"Configuration with ",(0,o.kt)("inlineCode",{parentName:"h1"},"config fakeroot")),(0,o.kt)("p",null,"Singularity 3.5 and above provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," command that\ncan be used by a root user to administer local system ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," files in a simple manner. This allows users to be\ngranted the ability to use Singularity's fakeroot functionality\nwithout editing the files manually. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," command\nwill automatically ensure that generated subuid/subgid ranges are an\napproriate size, and do not overlap."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," must be run as the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," user, or via ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo\nsingularity config fakeroot")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," files form part of the system configuration, and are\nsecurity sensitive. You may ",(0,o.kt)("inlineCode",{parentName:"p"},"--add")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--remove")," user\nsubuid/subgid mappings. You can also ",(0,o.kt)("inlineCode",{parentName:"p"},"--enable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable"),"\nexisting mappings."),(0,o.kt)("p",null,".. note::"),(0,o.kt)("p",null,"  If you deploy Singularity to a cluster you will need to make\narrangements to synchronize ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),"\nmapping files to all nodes."),(0,o.kt)("p",null,"  At this time, the glibc name service switch functionality does not\nsupport subuid or subgid mappings, so they cannot be definied in a\ncentral directory such as LDAP."),(0,o.kt)("h2",{id:"adding-a-fakeroot-mapping"},"Adding a fakeroot mapping"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a/--add <user>")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," to create new\nmapping entries so that ",(0,o.kt)("inlineCode",{parentName:"p"},"<user>")," can use the fakeroot feature of Singularity:"),(0,o.kt)("p",null," .. code-block:: none"),(0,o.kt)("p",null,"  $ sudo singularity config fakeroot --add dave"),(0,o.kt)("h1",{id:"show-generated-etcsubuid"},"Show generated ",(0,o.kt)("inlineCode",{parentName:"h1"},"/etc/subuid")),(0,o.kt)("p",null,"  $ cat /etc/subuid\n1000:4294836224:65536"),(0,o.kt)("h1",{id:"show-generated-etcsubgid"},"Show generated ",(0,o.kt)("inlineCode",{parentName:"h1"},"/etc/subgid")),(0,o.kt)("p",null,"  $ cat /etc/subgid\n1000:4294836224:65536"),(0,o.kt)("p",null," The first subuid range will be set to the top of the 32-bit UID\nspace. Subsequent subuid ranges for additional users will be created\nworking down from this value. This minimizes the change of overlap\nwith real UIDs on most systems."),(0,o.kt)("p",null,".. note::"),(0,o.kt)("p",null,"   The ",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," command generates mappings specified using\nthe user's uid, rather than their username. This is the preferred\nformat for faster lookups when configuring a large number of\nmappings, and the command can be used to manipulate these by\nusername."),(0,o.kt)("h2",{id:"deleting-disabling-enabling-mappings"},"Deleting, disabling, enabling mappings"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r/--remove <user>")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"config fakeroot")," to\ncompletely remove mapping entries. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<user>")," will no longer be\nable to use the fakeroot feature of Singularity:"),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("p",null,"  $ sudo singularity config fakeroot --remove dave"),(0,o.kt)("p",null,".. warning::"),(0,o.kt)("p",null,"   If a fakeroot mapping is removed, the subuid/subgid range may be\nassigned to another user via ",(0,o.kt)("inlineCode",{parentName:"p"},"--add"),". Any remaining files from\nthe prior user that were created with this mapping will be\naccessible to the new user via fakeroot."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d/--disable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-e/--enable")," options will comment and\nuncomment entries in the mapping files, to temporarily disable and\nsubsequently re-enable fakeroot functionality for a user. This can be\nuseful to disable fakeroot for a user, but ensure the subuid/subgid\nrange assigned to them is reserved, and not re-assigned to a different\nuser."),(0,o.kt)("p",null,".. code-block:: none"),(0,o.kt)("h1",{id:"disable-dave"},"Disable dave"),(0,o.kt)("p",null,"  $ sudo singularity config fakeroot --disable dave"),(0,o.kt)("h1",{id:"entry-is-commented"},"Entry is commented"),(0,o.kt)("p",null,"  $ cat /etc/subuid\n!1000:4294836224:65536"),(0,o.kt)("h1",{id:"enable-dave"},"Enable dave"),(0,o.kt)("p",null,"  $ sudo singularity config fakeroot --enable dave"),(0,o.kt)("h1",{id:"entry-is-active"},"Entry is active"),(0,o.kt)("p",null,"  $ cat /etc/subuid\n1000:4294836224:65536"))}p.isMDXComponent=!0}}]);