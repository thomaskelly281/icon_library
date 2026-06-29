import { mdiAirbag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Airbag(props: IconComponentProps) {
  return <Icon path={mdiAirbag} {...props} />;
}

export { mdiAirbag as path };
