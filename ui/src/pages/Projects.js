import React from "react";
import { ThemeProvider, StyleReset, Div, Text, Anchor, Image } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e",
  },
};
const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <Div
        textAlign="left"
        textColor="black900"
        d="flex"
        justify="center"
        flexDir="column"
      >
        <Text tag="h3" textSize="title">
          Genomic Software Projects
        </Text>
        <Anchor href="https://github.com/edotau/goFish" target="_blank">
          github.com/edotau/goFish
        </Anchor>
        <Anchor
          href="https://github.com/edotau/sticklebackCipher"
          target="_blank"
        >
          github.com/edotau/sticklebackCipher
        </Anchor>
        <Text tag="p">
          Documentation:{" "}
          <a
            href="https://pkg.go.dev/github.com/edotau/goFish"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            https://pkg.go.dev/github.com/edotau/goFish
          </a>
        </Text>

        <Text tag="h2" textSize="title">
          Genomic Basis of Adaptive Evolution
        </Text>
        <Text p={{ y: "0.5rem" }}>
          Stickleback repeated adaptation to new environments provide a powerful
          mechanism to study the molecular genetics of evolutionary changes in
          wild populations. As we develop stickleback genomic sequencing
          technologies, we can start mapping genes that control evolutionary
          change to the genetic basis of adaptive evolution.
        </Text>
        <Text p={{ y: "0.5rem" }} tag="h2" textSize="title">
          Marine Stickleback Genome
        </Text>
        <Text p={{ y: "0.5rem" }}>
          The newly minted marine stickleback genome was assembled into 22
          chromosomes, 455MB in genome length with an N50 of 21,246,911 base
          pairs and nearly gapless with only 715 gaps remaining. The marine
          stickleback was from the Rabbit Slough, Alaska population was was
          sequenced by combining several long read sequencing technologies with
          comprehensive enhanced informative short read Illumina sequencing.
        </Text>
        <Text tag="h2" textSize="title" m={{ y: "1rem" }}>
          Genome-Wide Variation Between Freshwater and Marine Stickleback
        </Text>
        <Text textSize="paragraph" p={{ y: "0.5rem" }}>
          Pairwise Maine and freshwater stickleback genome alignments were
          produced in{" "}
          <a
            href="https://genome.ucsc.edu/goldenPath/help/axt.html"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            AXT
          </a>{" "}
          format with{" "}
          <a
            href="http://www.bx.psu.edu/~rsharris/lastz/README.lastz-1.04.03.html"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            LASTZ
          </a>{" "}
          and converted to{" "}
          <a
            href="https://genome.ucsc.edu/goldenPath/help/chain.html"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            CHAIN
          </a>{" "}
          format with{" "}
          <a
            href="https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/axtChain/axtChain.c"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            axtChain
          </a>
          . AXT and CHAIN alignments were generated in both directions. The set
          of alignments were computed using the marine stickleback as the target
          genome which used the freshwater stickleback as the query genome.
          However, the second set of alignments were computed in reverse, this
          time with freshwater genome as the target with the marine stickleback
          as its query genome and further processed using{" "}
          <a
            href="https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainSwap/chainSwap.c"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            chainSwap
          </a>
          . LASTZ and axtChain were programmed into a wrapping{" "}
          <a
            href="https://raw.githubusercontent.com/edotau/sticklebackCipher/master/lastz/lastz.sh"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            script
          </a>
          . All chains were merged and sorted with{" "}
          <a
            href="https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainMergeSort/chainMergeSort.c"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            chainMergeSort
          </a>
          . Finally, the best alignments from chains are selected with{" "}
          <a
            href="https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainNet/chainNet.c"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            chainNet
          </a>{" "}
          using a red-black trees algorithm to keep track of areas of a
          chromosome already covered until there are no bases left and
          distinguish duplicated from non-duplicated regions. The resulting file
          is a hierarchical collection of chains, with the highest-scoring
          non-overlapping chains on top, and gaps filled by possible
          lower-scoring chains called a NET. Nets are single-coverage target
          genomes, but not for query genomes unless it has been filtered to be
          single-coverage on both target and query. We generated reciprocal-best
          netted chains our pairwise netted chains by writing a wrapping{" "}
          <a
            href="https://raw.githubusercontent.com/edotau/sticklebackCipher/master/lastz/reciprocalBestChainNets.sh"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            bash script
          </a>
          . All programs to process chains and nets are open sourced UCSC Kent
          Utilities developed to examine genomic duplications, deletions, and
          rearrangements of the first whole-genome comparisons between human and
          mouse{" "}
          <a
            href="https://www.pnas.org/content/pnas/100/20/11484.full.pdf"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            J Kent 2003
          </a>
          .
        </Text>
        <Text tag="h2" textSize="title">
          Differential Chromatin Accessibility and Gene Expression
        </Text>
        <Text tag="h3" textSize="title" m={{ b: "1rem" }}>
          Marine Freshwater Hybrid Crosses
        </Text>
        <Text textSize="paragraph" p={{ y: "0.5rem" }}>
          GATK:{" "}
          <a
            href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/vcfs/snps"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            SNPS
          </a>
          ,{" "}
          <a
            href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/vcfs/indels"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            INDELS
          </a>
          . Two different F1 hybrid (Freshwater x Marine){" "}
          <a
            href="https://en.wikipedia.org/wiki/Three-spined_stickleback"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            stickleback
          </a>{" "}
          fish were crossed from{" "}
          <a
            href="https://www.google.com/maps/place/Matadero+Creek/@37.4241044,-122.1510844,14z/data=!3m1!4b1!4m5!3m4!1s0x808fbaf41f10715b:0xc780fcc2d1157053!8m2!3d37.4241062!4d-122.1335748"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Matadero Creek
          </a>{" "}
          with{" "}
          <a
            href="https://www.google.com/maps/place/Little+Campbell+River/@49.0339164,-122.7053782,13z/data=!3m1!4b1!4m5!3m4!1s0x5485c5e345db5175:0x48382b94481b427a!8m2!3d49.0339216!4d-122.6703588"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Little Campbell
          </a>{" "}
          and{" "}
          <a
            href="https://www.google.com/maps/place/Rabbit+Slough/@61.5398359,-149.3153327,14z/data=!4m5!3m4!1s0x56c8e14ff29fb997:0x4542770c26b5618a!8m2!3d61.5333333!4d-149.2666666"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Rabbit Slough
          </a>{" "}
          with{" "}
          <a
            href="https://www.google.com/maps/place/Matanuska+Lake/@61.555098,-149.2414204,15z/data=!3m1!4b1!4m5!3m4!1s0x56c8e17081d30ab5:0x911087de19454c0b!8m2!3d61.5550708!4d-149.231791"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Lake Matanuska
          </a>
          . We generated{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4374986/"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            ATAC-Seq
          </a>
          ,{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2949280/"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            RNA-Seq
          </a>
          , and{" "}
          <a
            href="https://www.internationalgenome.org/sites/1000genomes.org/files/docs/nature09534.pdf"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            WGS
          </a>{" "}
          libraries to screen for allele specific enhancers near regions of
          increased chromatin accessibility that could perhaps be regulating
          differential gene expression. We perform a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Fisher%27s_exact_test"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Fisher s Exact Test
          </a>{" "}
          genome-wide to determine statistical significance if heterogygous SNPs
          sites are differentially increased or decreased in chromatin
          accessibility are enhancers or regulatory elements nearby
          differentially expressed genes.
        </Text>
        <Text tag="h2" textSize="subheader" m={{ b: "1rem" }}>
          Differential Chromatin Accessibility and Gene Expression
        </Text>
        <Text textSize="paragraph" p={{ y: "0.5rem" }}>
          Results:{" "}
          <a
            href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/beds/differentialChromatin/"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            Download
          </a>
        </Text>
        <Image
          src="/pictures/pilotF1Hybrid.svg"
          alt="Photo of F1 Hybrid"
          w="100%"
          maxH="800px"
        />
        <Text textSize="paragraph" p={{ y: "0.5rem" }}>
          After genotyping 18 stickleback genomes and 4 transcriptomes,
          9,468,248 SNPs genome wide were detected. Testing each heterogygous
          SNPs site pinpointed to this PLXNA4 gene located near the end of
          chromosome 4 spanning a little more than 200 kb. In the F1 hybrid WGS
          data is heterozygous for both SNPs. However, in the atac-seq cross,
          the genotype is homozygous suggesting one of the alleles is
          differentially increased in chromatin accessibility, while the other
          allele is completely closed. What is even more interesting is nearby
          in the rna-seq data shows gene expression is clearly down-regulated in
          one allele and increased gene expression with the other allele. What
          is PLXNA4?{" "}
          <a
            href="https://www.omim.org/entry/604280"
            target="_blank"
            style={{ color: "#007bff" }}
            rel="noreferrer"
          >
            PLXNA4
          </a>{" "}
          is a receptor for proteins SEMA3A and SEMA6, which mediate the effects
          of multiple semaphorins, including controlling diverse aspects of the
          nervous system development and plasticity, ranging from axon guidance
          and neuron migration to synaptic organization [Sun et al.,
          2013](https://science.sciencemag.org/content/342/6158/1241974). PLXNA4
          has recently been identified in genome wide association studies
          (GWAS), as a novel genetic player associated with Alzheimer disease
          [Han et al.,
          2018](https://www.frontiersin.org/articles/10.3389/fnins.2018.00946/full).
        </Text>
        <Image
          src="/pictures/chr04_30595050_30815018.svg"
          alt="Photo of Chromosome 4"
          w="100%"
          maxH="800px"
        />
        <Text tag="h3" textSize="title">
          Chromosome Spanning Assemblies
        </Text>
        <Text p={{ y: "0.5rem" }}>
          Hi-C libraries are commonly used today for assembling draft genomes
          largely because these libraries can provide insight into 3-D
          chromosome structures and investigate chromosome interactions in close
          proximity. A freshwater three-spine stickleback Hi-C library
          previously provided a noticeable improvement to the Gasterosteus
          aculeatus freshwater assembly [CL Peichel,
          2017](https://academic.oup.com/jhered/article/108/6/693/3957968).
          However, Karyotype characterization in sticklebacks have previously
          reported to have a high divergence chromosomal morphology [Kitano
          2009](https://www.nature.com/articles/nature08441), [Ross
          2009](https://pubmed.ncbi.nlm.nih.gov/19229325/). When we mapped
          previously generated freshwater Hi-C data to both the freshwater
          assembly and the marine stickleback genome revealed identical heat map
          signatures. Similarly, when we mapped marine Hi-C data against the
          freshwater and marine genomes respectively, produced the same Hi-C
          heat map profiles suggesting both assemblies are high contiguity
          chromosome level assemblies, but no large detectable chromosomal
          rearrangements or translocations.
        </Text>
        <Image
          src="/pictures/hic-plot.svg"
          alt="Hi-C Plot"
          w="100%"
          maxH="900px"
        />
        <Text tag="h3" textSize="title">
          Marine Freshwater Chromosomal Inversions
        </Text>
        <Text p={{ y: "0.5rem" }}>
          Performing marine to freshwater genome alignments and comparisons
          reveal consistent findings with previous work which identified 3
          marine freshwater chromosome inversions located on chromosomes 1, 11,
          and 21 [Jones et al.
          2012](https://www.nature.com/articles/nature10944.pdf). On the marine
          stickleback genome coordinates, the inversions span roughly from
          26,630,694 to 27,081,942 on chromosome one, 6,311,704 to 6,740,674 on
          chromosome eleven, and 9,570,312 to 11,281,238 on chromosome
          twenty-one.
        </Text>
        <Image
          src="/pictures/inversions.svg"
          alt="Chromosomal Inversions"
          w="100%"
          maxH="300px"
        />
        <Text tag="h3" textSize="title">
          Presence Absence
        </Text>
        <Text p={{ y: "0.5rem" }}>
          PITX1 contains multiple regulatory switches that allow for
          transcription of that gene in multiple tissues.
        </Text>
        <Image
          src="/pictures/pitx1_PA.svg"
          alt="PITX1 Presence Absence"
          w="100%"
          maxH="400px"
        />
      </Div>
    </ThemeProvider>
  );
};

export default Projects;
