import React, { Component } from "react";
import classes from "../../styles/addBook.module.scss";
import loading from "../../styles/app.module.scss";
import { Link, Redirect } from "react-router-dom";
import { getUser } from "../../services/auth";
import { adresse } from "../../config";
import update from "immutability-helper";
import history from "../../services/history";

class NewChapter extends Component {
  state = {
    isLoading: true,
    id: "",
    chapterNr: "",
    chaptitle: "",
    chaptitleSent: false,
    nrOfAkapit: 0,
    arrayOfNr: [],
    chapters: [],
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    let { chapterNr } = this.props.match.params;
    this.setState({ id: id, chapterNr: chapterNr }, () => {
      const url = `${adresse}/books/mine/${this.state.id}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      };
      fetch(url, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ chapters: data[0].chapters, isLoading: false });
        });
    });
  }
  //TITLE
  handleSubmit(event) {
    event.preventDefault();
    const url = `${adresse}users/updateMyBook/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    this.setState(
      {
        chapters: update(this.state.chapters, {
          [this.state.chapterNr]: {
            chaptitle: { $set: this.state.chaptitle },
          },
        }),
      },
      () => {
        fetch(url, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({ chapters: this.state.chapters }),
        })
          .then((response) => {
            if (!response.ok) {
              event.preventDefault();
              console.log("błąd");
            }
            return response.json();
          })
          .then((data) => {
            if (this.state.chapters[this.state.chapterNr].chaptitle != "") {
              this.setState({ chaptitleSent: true });
            }
          });
      }
    );
  }

  //AKAPIT
  handleAkapitS(event) {
    event.preventDefault();
    const url = `${adresse}users/updateMyBook/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    this.setState(
      { nrOfAkapit: this.state.chapters[this.state.chapterNr].akapits.length },
      () => {
        this.setState(
          {
            chapters: update(this.state.chapters, {
              [this.state.chapterNr]: {
                akapits: {
                  [this.state.nrOfAkapit]: {
                    $set: this.state.akapit,
                  },
                },
              },
            }),
          },
          () => {
            fetch(url, {
              method: "PATCH",
              headers: headers,
              body: JSON.stringify({ chapters: this.state.chapters }),
            })
              .then((response) => {
                if (!response.ok) {
                  event.preventDefault();
                  console.log("błąd");
                }
                return response.json();
              })
              .then((data) => {});
            this.setState({ nrOfAkapit: this.state.nrOfAkapit + 1 });
            this.setState({
              akapit: "",
              arrayOfNr: [...this.state.arrayOfNr, this.state.nrOfAkapit],
            });
          }
        );
      }
    );
  }

  deleteAkapit(id) {
    const url = `${adresse}users/updateMyBook/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    const arr = this.state.chapters[this.state.chapterNr].akapits.filter(
      (akapit, index) => index !== id
    );
    this.setState(
      {
        chapters: update(this.state.chapters, {
          [this.state.chapterNr]: {
            akapits: { $set: arr },
          },
        }),
      },
      () => {
        fetch(url, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({ chapters: this.state.chapters }),
        })
          .then((response) => {
            if (!response.ok) {
              console.log("błąd");
            }
            return response.json();
          })
          .then((data) => {});
      }
    );
  }

  oneDown(id) {
    function array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    }
    const newArr = array_move(
      this.state.chapters[this.state.chapterNr].akapits,
      id,
      id + 1
    );
    const url = `${adresse}users/updateMyBook/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    this.setState(
      {
        chapters: update(this.state.chapters, {
          [this.state.chapterNr]: {
            akapits: { $set: newArr },
          },
        }),
      },
      () => {
        fetch(url, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({ chapters: this.state.chapters }),
        })
          .then((response) => {
            if (!response.ok) {
              console.log("błąd");
            }
            return response.json();
          })
          .then((data) => {});
      }
    );
  }
  oneUp(id) {
    function array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    }
    const newArr = array_move(
      this.state.chapters[this.state.chapterNr].akapits,
      id,
      id - 1
    );
    const url = `${adresse}users/updateMyBook/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    this.setState(
      {
        chapters: update(this.state.chapters, {
          [this.state.chapterNr]: {
            akapits: { $set: newArr },
          },
        }),
      },
      () => {
        fetch(url, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({ chapters: this.state.chapters }),
        })
          .then((response) => {
            if (!response.ok) {
              console.log("błąd");
            }
            return response.json();
          })
          .then((data) => {});
      }
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.url !== this.props.match.url) {
      window.location.reload();
    }
  }

  nextChap(event) {
    event.preventDefault();
    this.setState({ chapterNr: parseInt(this.state.chapterNr, 10) + 1 }, () => {
      this.state.chapters.push({
        chaptitle: "",
        akapits: [],
      });
      const url = `${adresse}users/updateMyBook/${this.state.id}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${getUser().token}`,
      };
      fetch(url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({ chapters: this.state.chapters }),
      })
        .then((response) => {
          if (!response.ok) {
            console.log("błąd");
          }
          return response.json();
        })
        .then((data) => {
          this.props.history.push(
            `/myBooks/${this.state.id}/chapters/${parseInt(
              this.state.chapterNr,
              10
            )}`
          );
        });
    });
  }
  nextDoneChap() {
    this.props.history.push(
      `/myBooks/${this.state.id}/chapters/${
        parseInt(this.state.chapterNr, 10) + 1
      }`
    );
  }
  render() {
    console.log(this.state.chapterNr);
    if (this.state.isLoading === true) {
      return (
        <div
          style={{
            marginTop: "-180px",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={loading.loader}></div>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className={classes.newChapContainer}>
            wpisz tytuł rozdziału:
            <input
              name="chaptitle"
              type="text"
              onChange={(e) => this.setState({ chaptitle: e.target.value })}
              value={this.state.chaptitle}
            />
          </div>
          <h2>
            Rozdział:{" "}
            {this.state.chapters[this.state.chapterNr] === undefined
              ? null
              : this.state.chapters[this.state.chapterNr].chaptitle}
          </h2>
          <input
            type="submit"
            value={this.state.chaptitleSent ? "✔" : "Dodaj"}
          />
        </form>
        <br></br>
        <form onSubmit={(e) => this.handleAkapitS(e)}>
          <textarea
            value={this.state.akapit}
            name="akapit"
            onChange={(e) => this.setState({ akapit: e.target.value })}
          />
          <input type="submit" value="Dodaj akapit" />
        </form>
        <div>
          <div>
            {this.state.chapters.length > 0 &&
            this.state.chapters[this.state.chapterNr] !== undefined
              ? this.state.chapters[this.state.chapterNr].akapits.map(
                  (akapit, index) => (
                    <p key={index}>
                      <span>({index + 1})</span>
                      {akapit}
                      <span
                        className={classes.oneUp}
                        onClick={
                          this.state.chapters[this.state.chapterNr].akapits ===
                          0
                            ? null
                            : () => this.oneUp(index)
                        }
                      >
                        ↑
                      </span>
                      <span
                        className={classes.oneDown}
                        onClick={
                          this.state.chapters[this.state.chapterNr].akapits
                            .length -
                            1 ===
                          index
                            ? null
                            : () => this.oneDown(index)
                        }
                      >
                        ↓
                      </span>
                      <span
                        className={classes.delAkapit}
                        onClick={() => this.deleteAkapit(index)}
                      >
                        ×{" "}
                      </span>
                    </p>
                  )
                )
              : null}
          </div>
        </div>
        <br />
        <Link
          onClick={
            parseInt(this.state.chapterNr, 10) != this.state.chapters.length - 1
              ? () => this.nextDoneChap()
              : (event) => this.nextChap(event)
          }
          to={`/myBooks/${this.state.id}/chapters/${
            parseInt(this.state.chapterNr, 10) + 1
          }`}
        >
          <button>Następny rozdział</button>
        </Link>
      </div>
    );
  }
}

export default NewChapter;
