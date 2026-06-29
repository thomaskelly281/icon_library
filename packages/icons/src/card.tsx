import { mdiCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Card(props: IconComponentProps) {
  return <Icon path={mdiCard} {...props} />;
}

export { mdiCard as path };
