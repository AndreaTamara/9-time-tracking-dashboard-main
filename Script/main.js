const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Selfcare",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const previousText = {
    daily: "Yesterday", 
    weekly: "Last Week", 
    monthly: "Last month"}

let frequency = "weekly";



function handleFrequencyChange (f){

  let activeTimeFrame = null;
    
    if(frequency!==f){
      activeTimeFrame = document.getElementById(frequency)
      activeTimeFrame.classList.remove("active")
      frequency = f;
      activeTimeFrame = document.getElementById(frequency)
      activeTimeFrame.classList.add("active")
    } else{
      activeTimeFrame = document.getElementById(frequency)
      activeTimeFrame.classList.add("active")
    }

    data.forEach(renderCardInfo)

}



function renderCardInfo(c){
    
   let infoDiv = document.getElementById(c.title).getElementsByClassName("info")[0].children
   
   let h3 = infoDiv[0]
   let p = infoDiv[1]

   h3.textContent = c.timeframes[frequency].current + "hrs"
   p.textContent = previousText[frequency] + " - " + c.timeframes[frequency].previous
}

handleFrequencyChange (frequency)