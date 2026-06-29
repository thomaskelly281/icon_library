import { mdiAbjadHebrew } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AbjadHebrew(props: IconComponentProps) {
  return <Icon path={mdiAbjadHebrew} {...props} />;
}

export { mdiAbjadHebrew as path };
