import { mdiWeightLifter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeightLifter(props: IconComponentProps) {
  return <Icon path={mdiWeightLifter} {...props} />;
}

export { mdiWeightLifter as path };
