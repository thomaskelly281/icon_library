import { mdiApacheKafka } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApacheKafka(props: IconComponentProps) {
  return <Icon path={mdiApacheKafka} {...props} />;
}

export { mdiApacheKafka as path };
