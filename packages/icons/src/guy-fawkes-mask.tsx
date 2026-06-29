import { mdiGuyFawkesMask } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GuyFawkesMask(props: IconComponentProps) {
  return <Icon path={mdiGuyFawkesMask} {...props} />;
}

export { mdiGuyFawkesMask as path };
