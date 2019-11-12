const seatCenters = {
 N105: { x:0.470698, y:0.799218},
 E110: { x:0.970629, y:0.185885},
 S106: { x:0.568125, y:0.200109},
 N104: { x:0.421898, y:0.799218},
 S108: { x:0.446132, y:0.200109},
 N107B: { x:0.653170, y:0.808516},
 N107A: { x:0.591679, y:0.808516},
 N109: { x:0.740351, y:0.801587},
 S104: { x:0.714532, y:0.200109},
 S103: { x:0.763332, y:0.200109},
 S105B: { x:0.615637, y:0.192068},
 S105A: { x:0.677128, y:0.192068},
 WE09: { x:0.193755, y:0.288162},
 WE10: { x:0.174235, y:0.288162},
 WE03: { x:0.214886, y:0.382588},
 WE04: { x:0.214886, y:0.365915},
 WE05: { x:0.214886, y:0.350868},
 WE06: { x:0.214886, y:0.335415},
 WE13: { x:0.168681, y:0.332161},
 WE12: { x:0.169190, y:0.318228},
 WE12: { x:0.168681, y:0.347615},
 WE11: { x:0.169190, y:0.362361},
 WE07: { x:0.214886, y:0.318335},
 WE08: { x:0.214886, y:0.300848},
 W116B: { x:0.264926, y:0.810083},
 WE02: { x:0.193755, y:0.393240},
 WE01: { x:0.174235, y:0.393240},
 N100B: { x:0.254542, y:0.895456},
 E109A: { x:0.813515, y:0.187255},
 E109B: { x:0.834049, y:0.187255},
 E109C: { x:0.855223, y:0.187255},
 E109D: { x:0.876396, y:0.187255},
 N100: { x:0.276082, y:0.895384},
 W110B: { x:0.214142, y:0.617279},
 W110A: { x:0.192969, y:0.617279},
 W116A: { x:0.249879, y:0.810083},
 E105: { x:0.877410, y:0.445048},
 N103: { x:0.372509, y:0.813388},
 E100: { x:0.877410, y:0.677246},
 E103B: { x:0.877410, y:0.555246},
 E103A: { x:0.859761, y:0.575007},
 E106B: { x:0.877410, y:0.384560},
 E106A: { x:0.860127, y:0.404459},
 NA03: { x:0.372096, y:0.945716},
 NA02: { x:0.372096, y:0.922129},
 NA01: { x:0.372096, y:0.896306},
 WD05: { x:0.036379, y:0.412315},
 WD06: { x:0.060779, y:0.412315},
 WD07: { x:0.084365, y:0.412315},
 WD08: { x:0.110189, y:0.412315},
 SG01: { x:0.408347, y:0.126417},
 SG02: { x:0.408347, y:0.101613},
 SG03: { x:0.408347, y:0.076808},
 SG05: { x:0.408347, y:0.028011},
 SF10: { x:0.445660, y:0.126417},
 SF09: { x:0.445660, y:0.101613},
 SF08: { x:0.445660, y:0.076808},
 SF06: { x:0.445660, y:0.028011},
 SF01: { x:0.481547, y:0.126417},
 SF02: { x:0.481547, y:0.101613},
 SF03: { x:0.481547, y:0.076808},
 SF05: { x:0.481547, y:0.028011},
 SE10: { x:0.518860, y:0.126417},
 SE09: { x:0.518860, y:0.101613},
 SE08: { x:0.518860, y:0.077215},
 SE06: { x:0.518860, y:0.028011},
 SE01: { x:0.554747, y:0.126417},
 SE02: { x:0.554747, y:0.101613},
 SE03: { x:0.554747, y:0.076808},
 SE05: { x:0.554747, y:0.028011},
 SD10: { x:0.592060, y:0.126417},
 SD09: { x:0.592060, y:0.101613},
 SD08: { x:0.592060, y:0.076808},
 SD06: { x:0.592060, y:0.028011},
 SD01: { x:0.627947, y:0.126417},
 SD02: { x:0.627947, y:0.101613},
 SD03: { x:0.627947, y:0.076808},
 SD05: { x:0.627947, y:0.028011},
 SC10: { x:0.665260, y:0.126417},
 SC09: { x:0.665260, y:0.101613},
 SC08: { x:0.665260, y:0.076808},
 SC06: { x:0.665260, y:0.028011},
 SC01: { x:0.701147, y:0.126417},
 SC02: { x:0.701147, y:0.101613},
 SC03: { x:0.701147, y:0.076808},
 SC05: { x:0.701147, y:0.028011},
 SB10: { x:0.738460, y:0.126417},
 SB09: { x:0.738460, y:0.101613},
 SB08: { x:0.738460, y:0.076808},
 SB06: { x:0.738460, y:0.028011},
 SB01: { x:0.774347, y:0.126417},
 SB02: { x:0.774347, y:0.101613},
 SB03: { x:0.774347, y:0.076808},
 SB05: { x:0.774347, y:0.028011},
 SA01: { x:0.811660, y:0.126417},
 SA02: { x:0.811660, y:0.101613},
 SA03: { x:0.811660, y:0.076808},
 SA05: { x:0.811660, y:0.028011},
 NG01: { x:0.812157, y:0.872255},
 NG02: { x:0.812157, y:0.897059},
 NG03: { x:0.812157, y:0.921864},
 NG05: { x:0.812157, y:0.970660},
 NF10: { x:0.774372, y:0.873158},
 NF09: { x:0.774372, y:0.897962},
 NF08: { x:0.774372, y:0.922767},
 NF06: { x:0.774372, y:0.971563},
 NF01: { x:0.738817, y:0.873158},
 NF02: { x:0.738817, y:0.897962},
 NF03: { x:0.738817, y:0.922767},
 NF05: { x:0.738817, y:0.971563},
 NE10: { x:0.701528, y:0.873158},
 NE09: { x:0.701528, y:0.897962},
 NE08: { x:0.701528, y:0.922767},
 NE06: { x:0.701528, y:0.971563},
 NE01: { x:0.665313, y:0.873158},
 NE02: { x:0.665313, y:0.897962},
 NE03: { x:0.665313, y:0.922767},
 NE05: { x:0.665313, y:0.971563},
 ND10: { x:0.628024, y:0.873158},
 ND09: { x:0.628024, y:0.897962},
 ND08: { x:0.628024, y:0.922767},
 ND06: { x:0.628024, y:0.971563},
 ND01: { x:0.592112, y:0.873158},
 ND02: { x:0.592112, y:0.897962},
 ND03: { x:0.592112, y:0.922767},
 ND05: { x:0.592112, y:0.971563},
 NC10: { x:0.554824, y:0.873158},
 NC09: { x:0.554824, y:0.897962},
 NC08: { x:0.554824, y:0.922767},
 NC06: { x:0.554824, y:0.971563},
 NC01: { x:0.518913, y:0.873158},
 NC02: { x:0.518913, y:0.897962},
 NC03: { x:0.518913, y:0.922767},
 NC05: { x:0.518913, y:0.971563},
 NB10: { x:0.481624, y:0.873158},
 NB09: { x:0.481624, y:0.897962},
 NB08: { x:0.481624, y:0.922767},
 NB06: { x:0.481624, y:0.971563},
 NA09: { x:0.408424, y:0.873158},
 NA08: { x:0.408424, y:0.897962},
 NA07: { x:0.408424, y:0.922767},
 NA05: { x:0.408424, y:0.971563},
 NB01: { x:0.445713, y:0.873158},
 NB02: { x:0.445713, y:0.897962},
 NB03: { x:0.445713, y:0.922767},
 NB05: { x:0.445713, y:0.971563},
 WD04: { x:0.036379, y:0.372462},
 WD03: { x:0.060779, y:0.372462},
 WD02: { x:0.084365, y:0.372462},
 WD01: { x:0.110189, y:0.372462},
 WC05: { x:0.036379, y:0.336056},
 WC06: { x:0.060779, y:0.336056},
 WC07: { x:0.084365, y:0.336056},
 WC08: { x:0.110189, y:0.336056},
 WB05: { x:0.036379, y:0.262690},
 WB06: { x:0.060779, y:0.262690},
 WB07: { x:0.084365, y:0.262690},
 WB08: { x:0.110189, y:0.262690},
 WC04: { x:0.036379, y:0.298893},
 WC03: { x:0.060779, y:0.298893},
 WC02: { x:0.084365, y:0.298893},
 WC01: { x:0.110189, y:0.298893},
 WB04: { x:0.036379, y:0.225521},
 WB03: { x:0.060779, y:0.225521},
 WB02: { x:0.084365, y:0.225521},
 WB01: { x:0.110189, y:0.225521},
 WA05: { x:0.036379, y:0.189522},
 WA06: { x:0.060779, y:0.189522},
 WA07: { x:0.084365, y:0.189522},
 WA08: { x:0.110189, y:0.189522},
 WA04: { x:0.036379, y:0.151443},
 WA03: { x:0.060779, y:0.151443},
 WA02: { x:0.084365, y:0.151443},
 WA01: { x:0.110189, y:0.151443},
 SG10: { x:0.371647, y:0.126417},
 SG09: { x:0.371647, y:0.101613},
 SG08: { x:0.371647, y:0.076808},
 SG06: { x:0.371647, y:0.028011},
 ED05: { x:0.955302, y:0.554930},
 ED04: { x:0.980292, y:0.554930},
 EC06: { x:0.931326, y:0.628209},
 EC05: { x:0.955302, y:0.628209},
 EC04: { x:0.980292, y:0.628209},
 ED01: { x:0.931326, y:0.592045},
 ED02: { x:0.955302, y:0.592045},
 ED03: { x:0.980292, y:0.592045},
 EF01: { x:0.931326, y:0.445778},
 EF02: { x:0.955302, y:0.445778},
 EF03: { x:0.980292, y:0.445778},
 EF07: { x:0.931326, y:0.408609},
 EF06: { x:0.955302, y:0.408609},
 EF05: { x:0.980292, y:0.408609},
 EG06: { x:0.931326, y:0.336015},
 EG05: { x:0.955302, y:0.336015},
 EG04: { x:0.980292, y:0.336015},
 EH01: { x:0.931326, y:0.299851},
 EH02: { x:0.955302, y:0.299851},
 EH03: { x:0.980292, y:0.299851},
 EA01: { x:0.934460, y:0.823390},
 EA02: { x:0.958436, y:0.823390},
 EA03: { x:0.983426, y:0.823390},
 NH07: { x:0.871997, y:0.756840},
 NH06: { x:0.871997, y:0.786306},
 NH05: { x:0.871997, y:0.816786},
 EE06: { x:0.931326, y:0.481676},
 EE05: { x:0.955302, y:0.481676},
 EE04: { x:0.980292, y:0.481676},
 EE01: { x:0.931326, y:0.519032},
 EE02: { x:0.955302, y:0.519032},
 EE03: { x:0.980292, y:0.519032},
 EH06: { x:0.931326, y:0.251835},
 EH05: { x:0.955302, y:0.251835},
 EH04: { x:0.980292, y:0.251835},
 NH01: { x:0.813235, y:0.785900},
 NH02: { x:0.813235, y:0.816807},
 NH08: { x:0.871997, y:0.727764},
 NH03: { x:0.849398, y:0.785900},
 NH04: { x:0.849398, y:0.816807},
 EG01: { x:0.931326, y:0.372445},
 EG02: { x:0.955302, y:0.372445},
 EG03: { x:0.980292, y:0.372445},
 EA06: { x:0.931326, y:0.774609},
 EA05: { x:0.955302, y:0.774609},
 EA04: { x:0.980292, y:0.774609},
 EB01: { x:0.931326, y:0.738445},
 EB02: { x:0.955302, y:0.738445},
 EB03: { x:0.980292, y:0.738445},
 EC01: { x:0.931326, y:0.665245},
 EC02: { x:0.955302, y:0.665245},
 EC03: { x:0.980292, y:0.665245},
 EB06: { x:0.931326, y:0.701409},
 EB05: { x:0.955302, y:0.701409},
 EB04: { x:0.980292, y:0.701409},
 ED06: { x:0.931326, y:0.554930},
 SG07: { x:0.371647, y:0.052465},
 SF04: { x:0.408347, y:0.052465},
 SF04: { x:0.481547, y:0.052408},
 SF07: { x:0.445660, y:0.052411},
 SE07: { x:0.518860, y:0.052465},
 SE04: { x:0.554747, y:0.052465},
 SD07: { x:0.592060, y:0.052465},
 SD04: { x:0.627947, y:0.052465},
 SC07: { x:0.665260, y:0.052465},
 SC04: { x:0.701147, y:0.052465},
 SB07: { x:0.738460, y:0.052465},
 SB04: { x:0.774347, y:0.052465},
 SA04: { x:0.811660, y:0.052465},
 NG04: { x:0.812157, y:0.947740},
 NF07: { x:0.774372, y:0.947740},
 NF04: { x:0.738817, y:0.947740},
 NE07: { x:0.701528, y:0.947740},
 NE04: { x:0.665313, y:0.947740},
 ND07: { x:0.628024, y:0.947740},
 ND04: { x:0.591460, y:0.947740},
 NC07: { x:0.554824, y:0.947740},
 NC04: { x:0.518913, y:0.947740},
 NB07: { x:0.481624, y:0.947740},
 NB04: { x:0.445713, y:0.945716},
 NA06: { x:0.408424, y:0.945716},
 NA04: { x:0.372096, y:0.971563},
 W100: { x:0.194200, y:0.252543}};