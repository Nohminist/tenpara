import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const HTADSIM = ['HP', 'TP', '攻撃力', '防御力', '速力', '精神力', '移動力']
const SSBList = ['装備無', '装備有', '戦闘時']
const ResList = ['炎属性', '水属性', '氷属性', '風属性', '岩属性', '雷属性', '冥属性', '睡眠', '暗闇', '呪詛', '麻痺', '混乱', '魅了', '物理封印', '体技封印', '波動封印', '魔法封印', '移動封印', '行動封印']
const ElList = ['炎属性', '水属性', '氷属性', '風属性', '岩属性', '雷属性', '冥属性', '無属性']



export default function GridChr(props) {
  let C = props.C
  let cNameF = props.cNameF
  let data = props.data

  let cName1 = cNameF.split('_')[0]
  let cName2 = cNameF.split('_')[1]


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={6}>
          {cNameF}<br />
          {data.Chr[cName1][cName2].Gr}
          <Grid container spacing={1}>
            <Grid xs={3}>
              ステータス<br />
              {HTADSIM.map((name, index) => { return <React.Fragment key={index}>{name}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={3}>
              装備無<br />
              {HTADSIM.map((name, index) => { return <React.Fragment key={index}>{C[cNameF].Ally.St.Bas[name]}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={3}>
              装備有<br />
              {HTADSIM.map((name, index) => { return <React.Fragment key={index}>{C[cNameF].Ally.St.Org[name]}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={3}>
              戦闘時<br />
              {HTADSIM.map((name, index) => { return <React.Fragment key={index}>{C[cNameF].Ally.St.Btl[name]}<br /></React.Fragment> })}
            </Grid>
            {data.Chr[cName1][cName2].Wepn}<br />
            {data.Chr[cName1][cName2].Armr}<br />
            {data.Chr[cName1][cName2].Bddy}<br />
            {data.Chr[cName1][cName2].Skl[0]}<br />
            {data.Chr[cName1][cName2].Skl[1]}<br />
            {data.Chr[cName1][cName2].Skl[2]}<br />

          </Grid>
        </Grid>
        <Grid xs={6}>
          <Grid container spacing={1}>
            <Grid xs={2}>
              {ResList.map((name, i) => { return <React.Fragment key={i}>{name.split('属性')[0]}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={2}>
              {ResList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.耐性[name]}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={2}>
              <br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{name}<br /></React.Fragment> })}
              スキル1<br />スキル2<br />スキル3<br />
            </Grid>
            <Grid xs={1}>
              {C[cNameF].Ally.威力['全']}<br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.威力[name]}<br /></React.Fragment> })}
              {C[cNameF].Ally.威力['スキル1']}<br />{C[cNameF].Ally.威力['スキル2']}<br />{C[cNameF].Ally.威力['スキル3']}
            </Grid>
            <Grid xs={1}>
              {C[cNameF].Ally.威力['物理']}<br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.威力[name + '物理']}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={1}>
              {C[cNameF].Ally.威力['体技']}<br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.威力[name + '体技']}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={1}>
              {C[cNameF].Ally.威力['波動']}<br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.威力[name + '波動']}<br /></React.Fragment> })}
            </Grid>
            <Grid xs={1}>
              {C[cNameF].Ally.威力['魔法']}<br />
              {ElList.map((name, i) => { return <React.Fragment key={i}>{C[cNameF].Ally.威力[name + '魔法']}<br /></React.Fragment> })}
            </Grid>


          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}