import { mdiSoccerField } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SoccerField(props: IconComponentProps) {
  return <Icon path={mdiSoccerField} {...props} />;
}

export { mdiSoccerField as path };
